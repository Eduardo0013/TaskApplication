import addEventListener from './addEventListener'

const onClick = (callback,target) => {
    addEventListener('click',callback,target)
}
export default onClick