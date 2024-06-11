import { Router } from 'express'
import { documentController } from '../Controllers/documentController.js'

const router = Router()

router.post('/', documentController.create)

export default router