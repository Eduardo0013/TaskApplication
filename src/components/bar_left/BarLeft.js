import './barleft.css'
import '../../../css/colors.css'
import App from '../../../app/App'
import onClick from '../../hooks/onClick'
import {changeComponentIntoDashboard} from '../dashboard/Dashboard'
import CreateTask from '../create_task/CreateTask'
import TaskRead from '../task_read/TaskRead'

const BarLeft = () => {
    const actionLogout = () => {
        App.destroySession()
        App.goHome()
    }
    return `<div class="barleft">
        <div class="barleft__items">
            ${Group({
                label:'Crear Tarea',
                icon: '<i class="fa-solid fa-pen-fancy"></i>',
                toComponent: CreateTask,
                id: 'create-tasks'
            })}
            ${Group({
                label:'Visualizar Tareas',
                icon: '<i class="fa-solid fa-list"></i>',
                toComponent: TaskRead,
                id: 'read-tasks'
            })}
        </div>
        <div class="barleft__user-items"> 
            ${UserGroup({
                label: App.getUsername(),
                icon: '<i class="fa-solid fa-user"></i>',
                id: 'user-button',
                idLogoutButton: 'logout-button',
                buttonLogoutAction: actionLogout
            })}
        </div>
    </div>`
}
const UserGroup = ({label,icon,id,idLogoutButton,buttonLogoutAction}) => {
    onClick((event) => {
        if(event.target.id === idLogoutButton){
            buttonLogoutAction() 
        }
    },idLogoutButton)

    return `
    <div class="barleft__button justify-content-between border-bottom-none">
        <div ${id} class="barleft__userbutton">
            ${icon}${label}
        </div>
        <div class="barleft__poweroff">
            <i ${idLogoutButton ? `id=${idLogoutButton}` : ''} class="fa-solid fa-right-from-bracket"></i>
        </div>
    </div>
    `
}
const Group = ({label = '',icon = '',toComponent=null,id = null} = null) =>{
    const redirectTo = (event) => {
        if(event.target.id === id){
            changeComponentIntoDashboard(toComponent())
        }
    }
    onClick(redirectTo,id)
    return `<div
    id="${id}"
    class="barleft__button">
        ${icon}
        ${label}
    </div>`
}
export default BarLeft