import routes from "./routes"

const Router = (PATH) => {
    let page = routes.routesList.find(e => e.path === PATH)
    
    if(PATH === '' || PATH === '/' || PATH === '#/'){
        page = routes.default
    }
    if(!page){
        return routes.error;
    }
    if(page.beforeChargePage){
        page.beforeChargePage()
    }
    return page.component;
}

export default Router