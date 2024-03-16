import './form.css'

const Form = ({childs = '',className = 'form',id = null}) =>  `
<form class="${className}" ${id ? 'id='+id : ''}>  
    ${childs}
</form>
`

const Control = (label,id,placeholder,icon = '',type = 'text') => `
<div class="form__group" >
    <label class="form__label for="${id}">${label}</label>
    <div class="form__group--icons">
        <input placeholder="${placeholder}" type=${type} class="form__control" id="${id}" required/>
        <div class="form__group--icon">
            ${icon}
        </div>
    </div>
</div>
`
const DateControl = (label,id) => `
<div class="form__group">
    <label class="form__label for="${id}">${label}</label>
    <input class="form__control border-1 rounded" type=date class="form__control" id="${id}" required/>
</div>
`

const Title = (title='') => `<h1 class="form__title">${title}</h1>`
Form.Control = Control
Form.DateControl = DateControl
Form.Title = Title
export default Form