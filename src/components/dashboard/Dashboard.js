import BarLeft from "../bar_left/BarLeft"
import './dashboard.css'

export const changeComponentIntoDashboard = (component) => {
    const $dashboardComponent = document.getElementById('dashboard-component')
    $dashboardComponent.innerHTML = component
}
const Dashboard = (children) => {

    return `
    <div class="dashboard">
        ${BarLeft()}
        <div class="dashboard__component" id="dashboard-component">
            ${children}
        </div>
    </div>`
}
export default Dashboard