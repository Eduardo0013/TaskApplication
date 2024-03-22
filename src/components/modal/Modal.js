import Button from '../buttons/Button'
import onSubmit from '../../hooks/onSubmit'
import './modal.css'
import App from '../../../app/App'

const SUCCESS_ICON = '<i class="fa-solid fa-circle-check"></i>'
const Modal = () => {}
Modal.id = 'modal'

const createModalContainer = (modal) => {
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal__container')
    modalContainer.id = 'modal-container'
    modalContainer.appendChild(modal)
    return modalContainer
}

const createModal = (message,icon) => {
    const modal = document.createElement('form')
    modal.classList.add('modal')
    modal.id = Modal.id
    modal.innerHTML+=`
    ${icon ? `<div class="modal--success-icon">${icon}</div>` : ''}
    ${message}
    ${Button({
        type:'submit',
        content:'Aceptar',
        className: 'button button--uppercase button--spacing',
    })}`
    return modal
}
Modal.show = (message,icon,action) => {
    const $root = document.getElementById('root')
    let modal = createModal(message,icon)
    const modalContainer = createModalContainer(modal)
    let modalExistsInHtml = document.getElementById(modalContainer.id)
    if(!modalExistsInHtml){
        $root.appendChild(modalContainer)
        onSubmit(action,Modal.id)
    }else{
        modalExistsInHtml.classList.remove('modal--hidden')
    }
}
Modal.close = (event) => {
    if(event.target.id === Modal.id){
        const $modalContainer = document.getElementById('modal-container')
        $modalContainer.classList.add('modal--hidden')
    }
}
Modal.success = (message,action) => Modal.show(message,SUCCESS_ICON,action = Modal.close)

export default Modal