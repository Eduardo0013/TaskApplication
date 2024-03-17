import Login from '../pages/login/Login'
import Read from '../pages/read/Read'
import Create from '../pages/create/Create'

const routes = {
    default : Login(),
    error: '404 Not Found',
    routes: [
        {
            path: '#/',
            component: Login()
        },
        {
            path: '#/task',
            component: Create(),
        }
    ]
}
export default routes