import * as firebase from 'firebase'

export class Discov {
  constructor (database, personalId = null) {
    this.database = database

    this.personalId = personalId
    this.name = null
    this.location = null
    this.messages = null
    this.description = null
    this.user = null
    this.created = null
  }

  async updateLocation (location) {
    await this.database.ref(`/discov/${this.personalId}`).set({
      name: this.name,
      id: this.personalId,
      location,
      messages: this.messages,
      description: this.description,
      user: this.user,
      created: this.created
    })
  }

  async init (name = '', location = {}) {
    if (this.database) {
      const discov = await localStorage.getItem('discovId')
      if (discov) {
        await this.database.ref(`/discov/${this.discov}`).once('value').then((item) => {
          this.name = item.name || ''
          this.location = item.location || {}
          this.messages = item.messages || []
          this.description = item.description || ''
          this.user = item.user || ''
          this.created = item.created || 0
        })
      } else {
        this.personalId = this.database.ref('/discov').push().key
        const time = firebase.database.ServerValue.TIMESTAMP
        const user = navigator.userAgent
        await this.database.ref(`/discov/${this.personalId}`).set({
          name,
          id: this.personalId,
          location,
          messages: [],
          description: '',
          user,
          created: time
        })
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
