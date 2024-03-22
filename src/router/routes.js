import Login from '../pages/login/Login'
import Create from '../pages/create/Create'
import App from '../../app/App'
import resolveWithoutRefresh from '../helpers/resolveWithoutRefresh'

const routes = {
    error: '404 Not Found',
    routesList: [
        {
            path: '#/',
            component: Login(),
            beforeChargePage : () => {
                if(!App.isGuest()){
                    resolveWithoutRefresh('#/task')
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