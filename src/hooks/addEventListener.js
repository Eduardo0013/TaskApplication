import App from "../../app/App"

const addEventListener = (listener,callback,target = null) => {
    App.eventList.push({listener,callback,target})
}

export default addEventListener