import './table.css'

const Table = (headers,rows = null,className = 'read-task') => {    
    return `
    <table class="${className}">
        <thead>
            <tr>
                ${headers}
            </tr> 
        </thead>
        <tbody>
            ${rows}
        </tbody>
    </table>`
}
export default Table