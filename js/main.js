import '../css/app.css'
import Router from '../src/router/Router'
import App from '../app/App'

document.getElementById('root').innerHTML = Router(location.hash)

App.loadEventsOnJavascript()
App.loadJavascriptCode()