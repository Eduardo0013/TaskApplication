import Table from "../table/Table"

const TaskRead = () => {
    let tasks = []
    const getTasks = () => {
        tasks = localStorage.getItem('tasks')
        tasks = JSON.parse(tasks)
    }
    getTasks()
    return Table(['Nombre','Descripción','Fecha'],tasks)
}
export default TaskRead