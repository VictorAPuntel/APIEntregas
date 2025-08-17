import { Router } from 'express'
import { DeliveriesController } from '@/controllers/deliveriesController'
import { ensureAuthenticated } from '@/middlewares/ensureAutheticated'
import { verifyUserAuthorization } from '@/middlewares/verifyUserAuthorization'

const deliveriesRoute = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoute.use(ensureAuthenticated, verifyUserAuthorization(['sale']))
deliveriesRoute.post('/', deliveriesController.create)

export { deliveriesRoute }
