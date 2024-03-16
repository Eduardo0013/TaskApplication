import './barleft.css'
import '../../../css/utilities.css'
import '../../../css/colors.css'
import onClick from '../../hooks/onClick'
import { changeComponentIntoDashboard } from '../dashboard/Dashboard'
import CreateTask from '../create_task/CreateTask'
import TaskRead from '../task_read/TaskRead'
import App from '../../../app/App'

const BarLeft = () => {
    return `<div class="barleft">
        <div class="barleft__items">
            ${Group({
                label:'Crear Tarea',
                icon: '<i class="fa-solid fa-pen-fancy"></i>',
                to: '/task-create',
                id: 'create-tasks'
            })}
            ${Group({
                label:'Visualizar Tareas',
                icon: '<i class="fa-solid fa-list"></i>',
                to: '/task-read',
                id: 'read-tasks'
            })}
        </div>
        <div class="barleft__user-items"> 
            ${UserGroup({
                label: App.getUsername(),
                icon: '<i class="fa-solid fa-user"></i>'
            })}
            
        </div>
    </div>`
}
const UserGroup = ({label,icon,id,to}) => {
    return `
    <div class="barleft__group justify-content-between">
        <a ${id ? "id="+id : ''} class="barleft__link" href="#" component=${to}>${icon +' '+label}</a>
        <a><i class="fa-solid fa-power-off red"></i></a>
    </div>
    `
}
const Group = ({label = '',icon = '',to='',id = null} = null) =>{
    const redirectTo = (event) => {
        event.preventDefault()
        if(event.target.id === id){
            const components = {
                '/task-create' : CreateTask(),
                '/task-read': TaskRead()
            }
            const $group = event.target
            let component = $group.attributes[3]
            component = components[component.nodeValue]
            changeComponentIntoDashboard(component)
        }
    }
    onClick(redirectTo,id)
    return `
    <div class="barleft__group">
        <a ${id ? "id="+id : ''} class="barleft__link" href="#" component=${to}>${icon +' '+label}</a>
    </div>
    `
}
export default BarLeft