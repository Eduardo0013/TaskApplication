import App from "../../app/App"
import Router from "../router/Router"

const resolveWithoutRefresh = (hash) => {
    const $root = document.getElementById('root')
    $root.innerHTML = Router(hash)
    App.reloadApp()
}
export default resolveWithoutRefresh