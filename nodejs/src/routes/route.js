import todoRouter from './todo.routes.js'


const routes = (app) => {
    app.use('/api/todo', todoRouter)
    app.use('/remote')
}
export default routes