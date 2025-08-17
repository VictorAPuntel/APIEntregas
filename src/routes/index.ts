import { Router } from 'express'
import { usersRoutes } from './usersRoutes'
import { sessionsRoutes } from './sessionsRoutes'
import { deliveriesRoute } from './deliveriesRoutes'

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/deliveries', deliveriesRoute)

export { routes }
