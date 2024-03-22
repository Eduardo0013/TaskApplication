import Login from '../pages/login/Login'
import Create from '../pages/create/Create'
import App from '../../app/App'

const routes = {
    error: '404 Not Found',
    routesList: [
        {
            path: '#/',
            component: Login(),
            beforeChargePage : () => {
                if(!App.isGuest()){
                    location.href = '#/task'
                    location.reload()
                }
            }
        },
        {
            path: '#/task',
            component: Create(),
        }
    ]
}
routes.default = routes.routesList.find(e => e.path === '#/')
export default routes