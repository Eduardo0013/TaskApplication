import Form from "../form/Form"
import Button from "../buttons/Button"
import componentDidMount from '../../hooks/componentDidMount'
import onSubmit from "../../hooks/onSubmit"
import resolveWithoutRefresh from '../../helpers/resolveWithoutRefresh'
import checkUser from '../../helpers/checkUser'

const FormLogin = () => {
    const id = 'form-login'
    const changeToLevitateAnimation =  () => {
        const $formLogin = document.getElementById(id)
        $formLogin.style.animationName = 'fade-from-down'
        $formLogin.style.animationDuration = '1.2s'
        setTimeout(() => {
            $formLogin.style.animationName = 'levitate'
            $formLogin.style.animationIterationCount = 'infinite'
            $formLogin.style.animationDuration = '3s'
        },1500)
    }
    const submitForm = (event) => {
        event.preventDefault()
        if(event.target.id === id){
            const $username = document.getElementById('form-username')
            const $password = document.getElementById('form-password')
            
            if(!checkUser($username.value,$password.value)){
                const $usernameGroup = $username.parentNode
                const $passwordGroup = $password.parentNode
                $usernameGroup.classList.add('form__group--error')
                $passwordGroup.classList.add('form__group--error')
                return
            }
            sessionStorage.setItem('username',$username.value)
            resolveWithoutRefresh('#/task')
        }
    }
    componentDidMount(changeToLevitateAnimation,id)
    onSubmit(submitForm,id)

    return Form({
        childs : [
        Form.Title('INICIAR SESIÓN'),
        Form.Control(
            'Username',
            'form-username',
            'John Doe',
            '<i class="fa-solid fa-envelope"></i>'
        ),
        Form.Control(
            'Password',
            'form-password',
            'KSKS12@#',
            '<i class="fa-solid fa-lock"></i>',
            'password'
        ),
        Button({
            className: 'button button--uppercase button--spacing',
            type:'submit',
            content:'Login <i class="fa-solid fa-paper-plane"></i>'
        })
        ].flat().join(''),id
    })
}
export default FormLogin