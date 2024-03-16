import routes from "./routes"

const Router = (PATH) => {
    const page = routes.routes.find(e => e.path === PATH)
    if(PATH === '' || PATH === '/' || PATH === '#/'){
        console.log(PATH)
        return routes.default
    }
    if(!page){
        return routes.error;
    }
    return page.component;
}

export default Router