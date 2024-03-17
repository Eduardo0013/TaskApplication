import Table from "../table/Table"

const TaskRead = () => {
    let tasksFromLocalStorage = []
    let newTask = ''
    const getTasks = () => {
        tasksFromLocalStorage = localStorage.getItem('tasks')
        tasksFromLocalStorage = JSON.parse(tasksFromLocalStorage)
        tasksFromLocalStorage.map(e => {
                newTask+=`<tr>
                    <td>${e.name}</td>
                    <td>${e.description}</td>
                    <td>${e.date}</td>
                </tr>`
            })
    }
    getTasks()
    return Table(['<th>Nombre</th>','<th>Descripción</th>','<th>Fecha</th>'].flat().join(''),newTask)
}
export default TaskRead