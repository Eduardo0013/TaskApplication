import './button.css'

const Button = ({className= 'button',type,content,event = null}) => `
<button 
class="${className}" 
${event ? event : ''} 
type=${type}>
${content}
</button>
`

export default Button