import Router from "../router/Router"

const resolve = () => {
    const $root = document.getElementById('root')
    $root.innerHTML = Router(location.hash)
}
export default resolve