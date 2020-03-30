import Router from 'koa-router'
import UserController from 'controllers/users-controller'

const router = new Router()

router.get('/users', UserController.index)

router.post('/users/signup', UserController.create)
router.post('/users/login', UserController.login)

router.get('/users/:id', UserController.show)
router.delete('/users/:id', UserController.destroy)

export default router.routes()
