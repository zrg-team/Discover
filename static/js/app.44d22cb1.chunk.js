(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{1166:function(e,t){},1240:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SCREEN_NAMES=void 0;var o=r(n(8)),i=(r(n(1)),r(n(477))),a=r(n(1248)),u=n(25);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={WELCOME:"Welcome",SIGNUP:"Signup",HOME:"Home"};t.SCREEN_NAMES=s;var d=c(c({},{headerShown:!1,gestureEnabled:!0}),a.default.options),f={},p=a.default.createStackNavigator(),g=function(e){var t=(0,i.default)().getValueByPath("initialScreen");return(0,u.jsxs)(p.Navigator,c(c(c({},e),f),{},{initialRouteName:t,screenOptions:d,children:[(0,u.jsx)(p.Screen,{options:{},name:s.WELCOME,component:n(1280).default}),(0,u.jsx)(p.Screen,{options:{},name:s.SIGNUP,component:n(1284).default}),(0,u.jsx)(p.Screen,{options:{},name:s.HOME,component:n(1316).default})]}))};t.default=g},1246:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getKeyValue=void 0;t.getKeyValue=function(e,t){return e[t]}},1247:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.allNavigation=void 0;var r=n(1324),o=(0,r.createSelector)((function(e){return e.navigation.initialNavigation}),(function(e){return e})),i=(0,r.createSelector)((function(e){return e.navigation.initialScreen}),(function(e){return e})),a=(0,r.createSelector)((function(e){return e.navigation}),(function(e){return e}));t.allNavigation=a;var u={initialNavigation:o,initialScreen:i};t.default=u},1248:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.slideAnimation=t.default=void 0;var o=n(1249),i=r(n(22)),a=function(e){var t=e.current,n=e.next,r=e.inverted,o=e.layouts.screen,a=i.default.add(t.progress.interpolate({inputRange:[0,1],outputRange:[0,1],extrapolate:"clamp"}),n?n.progress.interpolate({inputRange:[0,1],outputRange:[0,1],extrapolate:"clamp"}):0);return{cardStyle:{transform:[{translateX:i.default.multiply(a.interpolate({inputRange:[0,1,2],outputRange:[o.width,0,-.3*o.width],extrapolate:"clamp"}),r)}]}}};t.slideAnimation=a;var u={options:{animationEnabled:!0,cardStyleInterpolator:a},createStackNavigator:o.createStackNavigator};t.default=u},1280:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),i=(r(n(1)),r(n(1281))),a=n(40),u=n(73),l=n(255),c=r(n(1283)),s=n(25);var d=(0,u.withTheme)((function(e){var t=(0,c.default)(),n=(0,a.useNavigation)(),r=((0,a.useRoute)(),function(){var e=(0,o.default)((function*(){n.navigate(l.SCREEN_NAMES.SIGNUP)}));return function(){return e.apply(this,arguments)}}());return(0,s.jsxs)(u.Page,{backgroundColor:"#FFFFFF",safeArea:!0,style:t.page_container,children:[(0,s.jsx)(u.Image,{resizeMode:"cover",source:"https://picsum.photos/600/600",style:t.image_1}),(0,s.jsxs)(u.View,{style:t.view_1,children:[(0,s.jsx)(u.Text,{style:t.text_1,children:"===== Welcome ====="}),(0,s.jsx)(u.View,{style:t.view_2,children:(0,s.jsx)(u.View,{style:t.view_3,children:(0,s.jsx)(i.default,{style:t.defaultbutton_1,title:"Login",onPress:r})})})]})]})}),"WelcomePage");t.default=d},1281:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),i=(r(n(1)),r(n(266))),a=n(73),u=r(n(1282)),l=n(25);var c=(0,a.withTheme)((function(e){var t=(0,u.default)(),n=function(){var t=(0,o.default)((function*(){var t=e.onPress;return t&&t()}));return function(){return t.apply(this,arguments)}}();return(0,l.jsx)(a.View,{style:[t.molecule_container,e.style],children:(0,l.jsx)(a.Button,{style:t.button_1,title:(0,i.default)(e,"title"),titleStyle:t.button_1_title,onPress:n})})}),"DefaultButtonMolecule");t.default=c},1282:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(73),o=(0,r.makeStyles)((function(e){var t;return{molecule_container:{width:"100%"},button_1:{backgroundColor:null==e||null==(t=e.brandingColors)?void 0:t.primary,borderColor:"transparent",borderRadius:(0,r.normalize)(12),borderWidth:(0,r.normalize)(1),height:(0,r.normalize)(50),paddingBottom:(0,r.normalize)(10),paddingTop:(0,r.normalize)(10)},button_1_title:{color:"#FFFFFF",fontSize:(0,r.normalize)(16),fontWeight:"400"}}}));t.default=o},1283:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(73),o=(0,r.makeStyles)((function(e){return{page_container:{flex:1},image_1:{height:"100%",position:"absolute",top:(0,r.normalize)(0),width:"100%"},view_1:{alignItems:"center",backgroundColor:"transparent",height:"100%",justifyContent:"center",width:"100%"},text_1:{color:"#ffffff",fontSize:(0,r.normalize)(16),fontWeight:"bold",textAlign:"auto"},view_2:{backgroundColor:"transparent",width:"100%"},view_3:{backgroundColor:"transparent",marginLeft:(0,r.normalize)(20),marginRight:(0,r.normalize)(20)},defaultbutton_1:{marginTop:(0,r.normalize)(12),width:"100%"}}}));t.default=o},1284:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),i=v(n(1)),a=n(102),u=n(1325),l=v(n(1320)),c=n(40),s=n(73),d=n(255),f=r(n(1315)),p=n(25);function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var h=(0,s.withTheme)((function(e){var t=(0,f.default)(),n=(0,c.useNavigation)(),r=((0,c.useRoute)(),(0,i.useMemo)((function(){return l.object().shape({input_1:l.string().notRequired(),input_2:l.string().notRequired()})}),[])),g=(0,a.useForm)({resolver:(0,u.yupResolver)(r),shouldFocusError:!0,mode:"onChange",reValidateMode:"onChange"}),v=function(){var e=(0,o.default)((function*(e){n.navigate(d.SCREEN_NAMES.HOME)}));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)(s.Page,{backgroundColor:"#FFFFFF",safeArea:!0,style:t.page_container,children:[(0,p.jsx)(s.Image,{resizeMode:"cover",source:"https://picsum.photos/600/600",style:t.image_1}),(0,p.jsx)(s.View,{style:t.view_1,children:(0,p.jsxs)(s.View,{style:t.form_1,children:[(0,p.jsx)(a.Controller,{control:g.control,render:function(e){var t=e.field,n=t.onChange,r=(t.onBlur,t.value),o=e.fieldState;o.isTouched,o.error;return(0,p.jsx)(s.Input,{onChange:n,value:r})},name:"input_1"}),(0,p.jsx)(a.Controller,{control:g.control,render:function(e){var n=e.field,r=n.onChange,o=(n.onBlur,n.value),i=e.fieldState;i.isTouched,i.error;return(0,p.jsx)(s.Input,{style:t.input_2,onChange:r,value:o})},name:"input_2"}),(0,p.jsx)(s.Button,{style:t.button_1,title:"Submit",titleStyle:t.button_1_title,onPress:g.handleSubmit(v)})]})})]})}),"SignupPage");t.default=h},1315:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(73),o=(0,r.makeStyles)((function(e){return{page_container:{flex:1},image_1:{height:"100%",position:"absolute",width:"100%"},view_1:{backgroundColor:"transparent",height:"100%",width:"100%"},form_1:{flex:1,paddingLeft:(0,r.normalize)(16),paddingRight:(0,r.normalize)(16),paddingTop:(0,r.normalize)(24)},input_2:{marginTop:(0,r.normalize)(16)},button_1:{backgroundColor:"#275A8C",borderColor:"transparent",borderRadius:(0,r.normalize)(12),borderWidth:(0,r.normalize)(1),height:(0,r.normalize)(50),marginTop:(0,r.normalize)(24),paddingBottom:(0,r.normalize)(10),paddingTop:(0,r.normalize)(10)},button_1_title:{color:"#FFFFFF",fontSize:(0,r.normalize)(16),fontWeight:"400"}}}));t.default=o},1316:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(1));var o=n(73),i=r(n(1317)),a=n(25);var u=(0,o.withTheme)((function(e){var t=(0,i.default)();return(0,a.jsxs)(o.Page,{backgroundColor:"#FFFFFF",safeArea:!0,style:t.page_container,children:[(0,a.jsx)(o.Header,{borderBottomColor:"#00000010",borderBottomWidth:1,leftIconSize:24,style:t.header_1,title:"Home",titleStyle:t.header_1_title}),(0,a.jsx)(o.WebView,{source:"https://reactjs.org",style:t.webview_1})]})}),"HomePage");t.default=u},1317:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(73),o=(0,r.makeStyles)((function(e){return{page_container:{flex:1},header_1:{height:(0,r.normalize)(70)},header_1_title:{color:"#000000",fontSize:(0,r.normalize)(16),fontWeight:"600"},webview_1:{height:"100%",width:"100%"}}}));t.default=o},1318:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,i.useEffect)((function(){}),[]),(0,i.useCallback)((0,o.default)((function*(){a.default.hide({fade:!0})})),[])};var o=r(n(17)),i=n(1),a=r(n(1319))},1319:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={hide:function(e){},getVisibilityStatus:function(){return"hidden"}}},255:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.SCREEN_NAMES=t.FLOW_NAMES=void 0,t.default=function(e){var t=e.onReady,n=(0,a.useRef)(),r=(0,a.useRef)(),i=(0,a.useRef)(),f=(0,s.default)().getValueByPath("initialNavigation");(0,a.useEffect)((function(){return"web"===u.default.OS&&"object"===typeof window&&(window.onhashchange=function(e){var t=(""+e.target.location.hash).replace("#/","");n.current&&n.current.canGoBack()&&t!==r.current&&r.current!==i.current&&n.current.goBack()}),function(){"web"===u.default.OS&&"object"===typeof window&&(window.onhashchange=void 0)}}),[]);var p=(0,a.useCallback)((function(){var e,o;t&&t(),r.current=null==(e=n.current)||null==(o=e.getCurrentRoute())?void 0:o.name}),[t]),g=(0,a.useCallback)((0,o.default)((function*(){var e,t,o=r.current,a=null==(e=n.current)||null==(t=e.getCurrentRoute())?void 0:t.name;o!==a&&"web"===u.default.OS&&"object"===typeof window&&(window.location.hash="/"+a),i.current=o,r.current=a})),[]),v=(0,a.useMemo)((function(){return(0,d.jsx)(c.default,{})}),[f]);return(0,d.jsx)(l.NavigationContainer,{ref:n,onReady:p,onStateChange:g,children:v})};var o=r(n(17)),i=r(n(8)),a=p(n(1)),u=r(n(10)),l=n(40),c=p(n(1240)),s=r(n(477)),d=n(25);function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c.SCREEN_NAMES);t.SCREEN_NAMES=v;t.FLOW_NAMES={MAIN:"Main"}},375:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.verifyPhoneNumberSuccess=t.verifyPhoneNumberRequest=t.verifyPhoneNumberFailed=t.signupWithEmailSuccess=t.signupWithEmailRequest=t.signupWithEmailFailed=t.setSessionIsCompleteRegistration=t.setSession=t.sessionLogout=t.loginWithGoogleSuccess=t.loginWithGoogleRequest=t.loginWithGoogleFailed=t.loginWithFacebookSuccess=t.loginWithFacebookRequest=t.loginWithFacebookFailed=t.loginWithAppleSuccess=t.loginWithAppleRequest=t.loginWithAppleFailed=t.createPhoneNumberSessionSuccess=t.createPhoneNumberSessionRequest=t.createPhoneNumberSessionFailed=t.authenticationWithEmailSuccess=t.authenticationWithEmailRequest=t.authenticationWithEmailFailed=void 0;var r=n(145),o=(0,r.createAction)("CREATE_PHONE_NUMBER_SESSION_REQUEST");t.createPhoneNumberSessionRequest=o;var i=(0,r.createAction)("CREATE_PHONE_NUMBER_SESSION_SUCCESS");t.createPhoneNumberSessionSuccess=i;var a=(0,r.createAction)("CREATE_PHONE_NUMBER_SESSION_FAILED");t.createPhoneNumberSessionFailed=a;var u=(0,r.createAction)("VERIFY_PHONE_NUMBER_REQUEST");t.verifyPhoneNumberRequest=u;var l=(0,r.createAction)("VERIFY_PHONE_NUMBER_SUCCESS");t.verifyPhoneNumberSuccess=l;var c=(0,r.createAction)("VERIFY_PHONE_NUMBER_FAILED");t.verifyPhoneNumberFailed=c;var s=(0,r.createAction)("LOGIN_WITH_GOOGLE_REQUEST");t.loginWithGoogleRequest=s;var d=(0,r.createAction)("LOGIN_WITH_GOOGLE_SUCCESS");t.loginWithGoogleSuccess=d;var f=(0,r.createAction)("LOGIN_WITH_GOOGLE_FAILED");t.loginWithGoogleFailed=f;var p=(0,r.createAction)("LOGIN_WITH_FACEBOOK_REQUEST");t.loginWithFacebookRequest=p;var g=(0,r.createAction)("LOGIN_WITH_FACEBOOK_SUCCESS");t.loginWithFacebookSuccess=g;var v=(0,r.createAction)("LOGIN_WITH_FACEBOOK_FAILED");t.loginWithFacebookFailed=v;var h=(0,r.createAction)("LOGIN_WITH_APPLE_REQUEST");t.loginWithAppleRequest=h;var y=(0,r.createAction)("LOGIN_WITH_APPLE_SUCCESS");t.loginWithAppleSuccess=y;var b=(0,r.createAction)("LOGIN_WITH_APPLE_FAILED");t.loginWithAppleFailed=b;var _=(0,r.createAction)("AUTHENTICATION_WITH_EMAIL_REQUEST");t.authenticationWithEmailRequest=_;var O=(0,r.createAction)("AUTHENTICATION_WITH_EMAIL_SUCCESS");t.authenticationWithEmailSuccess=O;var S=(0,r.createAction)("AUTHENTICATION_WITH_EMAIL_FAILED");t.authenticationWithEmailFailed=S;var w=(0,r.createAction)("SIGN_UP_WITH_EMAIL_REQUEST");t.signupWithEmailRequest=w;var m=(0,r.createAction)("SIGN_UP_WITH_EMAIL_SUCCESS");t.signupWithEmailSuccess=m;var j=(0,r.createAction)("SIGN_UP_WITH_EMAIL_FAILED");t.signupWithEmailFailed=j;var E=(0,r.createAction)("SET_SESSION_IS_COMPLETE_REGISTRATION");t.setSessionIsCompleteRegistration=E;var P=(0,r.createAction)("LOGOUT");t.sessionLogout=P;var N=(0,r.createAction)("SET_SESSION");t.setSession=N},376:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.setNavigation=t.setInitialScreen=t.setInitialNavigation=t.clearNavigation=void 0;var r=n(145),o=(0,r.createAction)("SET_INITIAL_NAVIGATION");t.setInitialNavigation=o;var i=(0,r.createAction)("SET_INITIAL_SCREEN");t.setInitialScreen=i;var a=(0,r.createAction)("CLEAR_NAVIGATION");t.clearNavigation=a;var u=(0,r.createAction)("SET_SESSION");t.setNavigation=u},477:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(0,i.useDispatch)();return{get:function(e){var t=(0,a.getKeyValue)(l.default,e);return(0,i.useSelector)(t)},getValueByPath:function(e){return(0,o.default)((0,i.useSelector)(l.allNavigation),e)},getAll:function(){return(0,i.useSelector)(l.allNavigation)},setValue:function(t,n){e((0,u.setNavigation)({key:t,value:n}))},setInitialScreen:function(t){e((0,u.setInitialScreen)(t))},setInitialNavigation:function(t){e((0,u.setInitialNavigation)(t))},clearNavigation:function(){e((0,u.clearNavigation)())}}};var o=r(n(266)),i=n(507),a=n(1246),u=n(376),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(1247));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}},522:function(e,t,n){e.exports=n(523)},523:function(e,t,n){var r=n(0),o=n(524),i=r(n(652)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(680)),u=r(n(681));function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}(0,o.registerRootComponent)((0,i.default)(u.default)),a.unregister()},652:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(8)),i=r(n(17)),a=r(n(9)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(1)),l=r(n(653)),c=r(n(13)),s=r(n(31)),d=r(n(12)),f=r(n(126)),p=r(n(662)),g=r(n(676)),v=n(25);function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(e){return function(t){var n=(0,u.useState)(null),r=(0,a.default)(n,2),d=r[0],h=r[1],_=(0,u.useState)(!1),O=(0,a.default)(_,2),S=O[0],w=O[1],m=(0,u.useRef)(null),j=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),E=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;(0,u.useEffect)((function(){var e,t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n=function(e){w(!t||!(0===window.orientation||360===window.orientation))},r=function(e){"WORKER_SUCCESS"===e.type&&(clearTimeout(m.current),m.current=setTimeout((0,i.default)((function*(){if(j&&E&&!window.navigator.standalone)return h((0,v.jsxs)(c.default,{style:b.ios_tip_container,children:[(0,v.jsxs)(c.default,{style:b.ios_tip,children:[(0,v.jsx)(g.default,{name:"add-box",style:b.ios_add_box}),(0,v.jsxs)(s.default,{style:b.ios_tip_text,children:["Install"," ",(0,v.jsx)(s.default,{style:{fontWeight:"bold"},children:"the App"})," to your iphone: tap",(0,v.jsx)(p.default,{name:"share",style:b.ios_share_icon})," and then"," ",(0,v.jsx)(s.default,{style:{fontWeight:"bold"},children:"Add to Home Screen"})]})]}),(0,v.jsx)(c.default,{style:b.ios_icon})]}))})),200))},o=function(t){t.preventDefault(),e=t,clearTimeout(m.current),m.current=setTimeout((0,i.default)((function*(){e.prompt(),e.userChoice.then((function(e){}))})),1e3)},a=function(e){};return"object"===typeof window&&(window.addEventListener("beforeinstallprompt",o),window.addEventListener("WORKER_SUCCESS",r),window.addEventListener("orientationchange",n,!1),window.addEventListener("appinstalled",a),w(!t||window.innerWidth>window.innerHeight)),function(){"object"===typeof window&&(window.removeEventListener("beforeinstallprompt",o),window.removeEventListener("WORKER_SUCCESS",r),window.removeEventListener("orientationchange",n),window.removeEventListener("appinstalled",a))}}),[]);return(0,v.jsxs)(v.Fragment,{children:[S?(0,v.jsxs)(c.default,{style:b.error_container,children:[(0,v.jsx)(l.default,{value:window.location.href}),(0,v.jsx)(s.default,{style:b.error_text,children:"Scan it with your mobile device, recommended safari for ios and default browser for android"})]}):(0,v.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)),d?(0,v.jsxs)(c.default,{style:b.modalContainer,children:[(0,v.jsx)(f.default,{onPress:function(){return h(null)},style:b.outside,children:(0,v.jsx)(c.default,{style:b.blur})}),d]}):null]})}};var b=d.default.create({error_container:{width:"100%",height:"100%",display:"flex",paddingHorizontal:20,justifyContent:"center",alignItems:"center",backgroundColor:"#f7f8fa",zIndex:2},error_text:{color:"#31373a",fontWeight:"bold",textAlign:"center",fontSize:20,marginTop:15},ios_tip_container:{width:"100%",height:100,position:"absolute",bottom:10,justifyContent:"center",alignItems:"center"},ios_tip:{width:"calc(100% - 20px)",backgroundColor:"#C9CED4",zIndex:2,borderRadius:6,display:"flex",flexDirection:"row",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62},ios_add_box:{color:"#7E8C8D",fontSize:40,paddingTop:5,paddingRight:5},ios_share_icon:{color:"#87ADE7",fontSize:20,display:"inline",textAlignVertical:"sub",paddingHorizontal:10},ios_icon:{zIndex:1,backgroundColor:"#C9CED4",width:40,height:40,transform:[{rotate:"45deg"}],marginTop:-30,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62},ios_tip_text:{paddingTop:10,paddingBottom:10},outside:{position:"absolute",backgroundColor:"transparent",width:"100%",height:"100%"},blur:{width:"100%",height:"100%","backdrop-filter":"saturate(180%) blur(6px)","background-color":"rgba(255, 255, 255, 0.15)"},modalContainer:{zIndex:99,width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"}})},680:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.register=function(e){if("serviceWorker"in navigator){if(new URL("/Discover",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/Discover/service-worker.js";n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):r(t,e)}))}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))};var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}},681:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(324);r(n(1));var o=r(n(861)),i=r(n(136)),a=r(n(862)),u=n(863),l=n(508),c=n(374),s=n(507),d=n(872),f=n(885),p=n(112),g=r(n(890)),v=n(73),h=r(n(255)),y=r(n(1318)),b=n(25);o.default.extend(a.default),(0,c.enableScreens)();var _={brandingColors:{primary:"#f08a4b",secondary:"#577590"},Page:{SafeAreaView:p.SafeAreaView},Image:{ImageComponent:g.default}},O=function(){var e=(0,y.default)();return(0,b.jsx)(s.Provider,{store:d.store,children:(0,b.jsx)(f.PersistGate,{loading:null,persistor:d.persistor,children:(0,b.jsx)(v.ThemeProvider,{safeArea:!0,theme:_,children:(0,b.jsxs)(l.I18nextProvider,{i18n:u.I18n,children:[(0,b.jsx)(i.default,{translucent:!0,backgroundColor:"transparent"}),(0,b.jsx)(h.default,{onReady:e})]})})})})};t.default=O},863:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.I18n=void 0;var o=n(508),i=r(n(1321)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(864));function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var l={type:"languageDetector",async:!0,detect:function(e){return e("en")},init:function(){},cacheUserLanguage:function(){}};i.default.use(l).use(o.initReactI18next).init({fallbackLng:"en",resources:a.default,debug:!1,interpolation:{escapeValue:!1}});var c=i.default;t.I18n=c},864:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={}},872:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.persistor=void 0;var o=n(117),i=n(1322),a=r(n(873)),u=(n(880),{key:"root",storage:r(n(881)).default,timeout:0,whitelist:["session","navigation"]}),l=(0,i.persistReducer)(u,a.default);var c=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.compose,s=[o.applyMiddleware.apply(void 0,[])],d=(0,o.legacy_createStore)(l,{},c.apply(void 0,s));t.store=d;var f=(0,i.persistStore)(d);t.persistor=f},873:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(117),i=n(375),a=r(n(876)),u=r(n(877)),l=r(n(878)),c=(0,o.combineReducers)({authentication:a.default,navigation:u.default,user:l.default}),s=function(e,t){if(t.type!==""+i.sessionLogout)return c(e,t)};t.default=s},876:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=r(n(8)),a=n(375),u=n(145);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={loading:!1,authenticatedData:null,authenteicated:!1,isCompleteRegister:!1},d=(o={},(0,i.default)(o,""+a.sessionLogout,(function(){return s})),(0,i.default)(o,""+a.createPhoneNumberSessionRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.createPhoneNumberSessionSuccess,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.createPhoneNumberSessionFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.signupWithEmailRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.signupWithEmailSuccess,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.signupWithEmailFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.verifyPhoneNumberRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.verifyPhoneNumberSuccess,(function(e,t){return c(c({},e),{},{authenticatedData:t.payload.authenticatedData,authenticated:t.payload.authenticated,loading:!1})})),(0,i.default)(o,""+a.verifyPhoneNumberFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.loginWithGoogleRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.loginWithGoogleSuccess,(function(e,t){return c(c({},e),{},{authenticatedData:t.payload.authenticatedData,authenticated:t.payload.authenticated,loading:!1})})),(0,i.default)(o,""+a.loginWithGoogleFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.loginWithFacebookRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.loginWithFacebookSuccess,(function(e,t){return c(c({},e),{},{authenticatedData:t.payload.authenticatedData,authenticated:t.payload.authenticated,loading:!1})})),(0,i.default)(o,""+a.loginWithFacebookFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.loginWithAppleRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.loginWithAppleSuccess,(function(e,t){return c(c({},e),{},{authenticatedData:t.payload.authenticatedData,authenticated:t.payload.authenticated,loading:!1})})),(0,i.default)(o,""+a.loginWithAppleFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.authenticationWithEmailRequest,(function(e){return c(c({},e),{},{loading:!0})})),(0,i.default)(o,""+a.authenticationWithEmailSuccess,(function(e,t){return c(c({},e),{},{authenticatedData:t.payload.authenticatedData,authenticated:t.payload.authenticated,loading:!1})})),(0,i.default)(o,""+a.authenticationWithEmailFailed,(function(e){return c(c({},e),{},{loading:!1})})),(0,i.default)(o,""+a.setSessionIsCompleteRegistration,(function(e,t){return c(c({},e),{},{isCompleteRegister:t.payload})})),(0,i.default)(o,""+a.setSession,(function(e,t){return c(c({},e),{},(0,i.default)({},t.payload.key,t.payload.value))})),o),f=(0,u.handleActions)(d,s);t.default=f},877:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=r(n(8)),a=n(376),u=n(145);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={initialNavigation:null,initialScreen:null},d=(o={},(0,i.default)(o,""+a.clearNavigation,(function(){return s})),(0,i.default)(o,""+a.setNavigation,(function(e,t){return c(c({},e),{},(0,i.default)({loading:!0},t.payload.key,[t.payload.value]))})),(0,i.default)(o,""+a.setInitialScreen,(function(e,t){return c(c({},e),{},{initialScreen:t.payload})})),(0,i.default)(o,""+a.setInitialNavigation,(function(e,t){return c(c({},e),{},{initialScreen:"",initialNavigation:t.payload})})),o),f=(0,u.handleActions)(d,s);t.default=f},878:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(879);var r=(0,n(145).handleActions)({},{loading:!1});t.default=r},879:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},890:function(e,t,n){var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(77)).default;t.default=o}},[[522,1,2]]]);
//# sourceMappingURL=app.44d22cb1.chunk.js.map