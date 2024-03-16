import addEventListener from "./addEventListener"

const onSubmit = (callback,target = null) => {
    addEventListener('submit',callback,target)
}
export default onSubmit