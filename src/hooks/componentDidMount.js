import App from "../../app/App"

const componentDidMount = (callback,target = null) => {
    App.codeQueue.push({callback,target})
}

export default componentDidMount