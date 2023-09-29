import { Router, Request, Response } from "express";

import CreatUserController from "./controllers/user/CreateUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import DetailUserController from './controllers/user/DetailUserController'

import { isAuthentication } from "./midlewares/isAuthentication";
const router = Router()

// ROTAS USERS
router.post('/users', new CreatUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/detail', isAuthentication, new DetailUserController().handle)

export { router }