export default function App(){}
App.eventList = []
App.codeQueue = []
App.goHome = () => {
    location.hash = ''
    location.reload()
}
App.isGuest = () => {
    return !App.getUsername()
}
App.getUsername = () => {
    return sessionStorage.getItem('username')
}
App.destroySession= () => {
    if(!App.isGuest()){
        sessionStorage.removeItem('username')
    }
}

App.loadEventsOnJavascript = () => {
    App.eventList.forEach(e => {
        const $target = document.getElementById(e.target)
        if($target){
            document.addEventListener(e.listener,e.callback)
        }
    })
}
App.loadJavascriptCode = () => {
    App.codeQueue.map(e => {
        const target = document.getElementById(e.target) 
        if(target){
            e.callback()
        }
    })
}

App.reloadApp = () => {
    App.loadEventsOnJavascript()
    App.loadJavascriptCode()
}