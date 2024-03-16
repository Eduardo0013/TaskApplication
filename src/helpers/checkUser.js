const checkUser = (username,password) => {
    const usernameFromLocalStorage = localStorage.getItem('username')
    const passwordFromLocalStorage = localStorage.getItem('password')

    return username.toLowerCase() === usernameFromLocalStorage.toLowerCase() && passwordFromLocalStorage === password
}
export default checkUser