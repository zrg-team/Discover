import * as firebase from 'firebase'
import { database } from '../utils/firebase'

class Discov {
  constructor (personalId = null) {
    this.personalId = personalId
    this.name = null
    this.location = null
    this.messages = null
    this.description = null
    this.user = null
    this.created = null
  }

  async updateLocation (location) {
    if (!this.personalId) {
      return false
    }
    await database.ref(`/discovs/${this.personalId}`).set(JSON.stringify({
      location,
      name: this.name,
      id: this.personalId,
      messages: this.messages,
      description: this.description,
      user: this.user,
      created: this.created
    }))
  }

  async init (name = '', location = {}) {
    if (database) {
      const discov = await localStorage.getItem('discovId')
      if (discov) {
        console.log('discov', discov)
        await database.ref(`/discovs/${discov}`).once('value').then((snapshot) => {
          const item = JSON.parse(snapshot.val())
          console.log('item>>>>>>>>>>', item)
          this.name = item.name || ''
          this.location = item.location || {}
          this.messages = item.messages || []
          this.description = item.description || ''
          this.user = item.user || ''
          this.created = item.created || 0
        })
      } else {
        this.personalId = database.ref('/discovs').push().key
        const time = firebase.database.ServerValue.TIMESTAMP
        const user = navigator.userAgent
        await database.ref(`/discovs/${this.personalId}`).set(JSON.stringify({
          name,
          id: this.personalId,
          location,
          messages: [],
          description: '',
          user,
          created: time
        }))
        this.name = name
        this.location = location
        this.messages = ''
        this.description = ''
        this.user = user
        this.created = time
        await localStorage.setItem('discovId', this.personalId)
      }
    }
  }
}

export default new Discov()
