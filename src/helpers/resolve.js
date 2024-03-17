import App from "../../app/App"
import Router from "../router/Router"

const resolve = () => {
    const $root = document.getElementById('root')
    $root.innerHTML = Router(location.hash)
    App.reloadApp()
}
export default resolve