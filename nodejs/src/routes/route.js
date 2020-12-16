import todoRouter from './todo.routes.js'
import auth from './auth.route'

const routes = (app) => {
    app.use('/api/todo', todoRouter)
    app.use('/auth', auth)
    // app.use('/remote')
}
export default routes