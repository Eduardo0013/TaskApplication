import './table.css'

const Table = (headers,rows = null) => {    
    console.log(rows)
    return `
    <table class="read-task">
        <thead>
            ${headers !== null ? headers.map(header => `<th>${header}</th>`) : ''}
        </thead>
        <tbody>
            ${rows !==null ? rows.map(row => {
                return `<tr>
                    <td>${row.name}</td>
                    <td>${row.description}</td>
                    <td>${row.date}</td>
               </tr>`
            }) :'' }
        </tbody>
    </table>`
}
export default Table