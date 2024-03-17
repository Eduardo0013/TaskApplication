import Form from "../form/Form"
import './create_task.css'
import '../../../css/utilities.css'
import Button from '../buttons/Button'
import onSubmit from '../../hooks/onSubmit'

const CreateTask = () => {
    const id = 'task-create'
    
    const insertTask = (event) => {
        event.preventDefault()

        if(event.target.id === id){
            const taskName = document.getElementById('task-name').value
            const taskDescription = document.getElementById('task-description').value
            const taskDate = document.getElementById('task-date').value
            let tasks
            if((tasks = localStorage.getItem('tasks')) !== null){
                tasks = JSON.parse(tasks)
                tasks.push({name: taskName,description: taskDescription,date: taskDate})
                localStorage.setItem('tasks',JSON.stringify(tasks))
                console.log(localStorage.getItem('tasks'))
                return
            }
            tasks = []
            tasks.push({name: taskName,description: taskDescription,date: taskDate})
            localStorage.setItem('tasks',JSON.stringify(tasks))
            console.log(localStorage.getItem('tasks'))
        }
    }

    onSubmit(insertTask,id)
    return Form({
        childs:[
            Form.Control(
                'Nombre',
                'task-name',
                'Ir al gimnasio',
                '<i class="fa-solid fa-list-check"></i>'
            ),
            Form.Control(
                'Descripción',
                'task-description',
                'Ir al gimnasio a pagar la membresia',
                '<i class="fa-solid fa-comment"></i>'
            ),
            Form.DateControl(
                'Fecha',
                'task-date',
            ),
            Button({
                type:'submit',
                content: 'Guardar',
                className: 'button button--uppercase button--spacing'
            })
    ].flat().join(''),
        className:'form border-left-none w-full h-full border-none',
        id
    })
}

export default CreateTask