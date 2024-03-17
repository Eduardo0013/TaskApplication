import App from "../../app/App"

const addEventListener = (listener,callback,target = null,params) => {
    App.eventList.push(params 
        ? {listener,callback,target,params} 
        : {listener,callback,target})
}

export default addEventListener