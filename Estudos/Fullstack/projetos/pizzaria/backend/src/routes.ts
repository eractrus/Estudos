import { Router, Request, Response } from "express";
import multer from "multer";

//Users
import CreatUserController from "./controllers/user/CreateUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import DetailUserController from './controllers/user/DetailUserController'

//Auth
import { isAuthentication } from "./midlewares/isAuthentication";

//Category
import CreateCategoryController from "./controllers/category/createCategoryController";
import listCategoryController from "./controllers/category/listCategoryController";

//Product
import CreateProductContoller from "./controllers/product/createProductController";
import ListeByCategoryController from "./controllers/product/listeByCategoryController";

//Order
import CreateOrderController from "./controllers/order/createOrderController";
import RemoveOrderController from "./controllers/order/removeOrderController";
import AddItemController from "./controllers/order/addItemController";
import DelItemController from "./controllers/order/delItemController";
import SendOrderController from "./controllers/order/sendOrderController";
import ListOrderController from "./controllers/order/listOrderController";
import DetailOrderController from "./controllers/order/detailOrderController";
import FinishOrderController from "./controllers/order/finishOrderController";

//Upload Image for product
import uploadConfig from './config/multer'


const router = Router()
const upload = multer(uploadConfig.upload("./tmp"))

//**************************ROTAS

// ROTAS USERS
router.post('/users', new CreatUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/detail', isAuthentication, new DetailUserController().handle)

//ROTAS CATEGORY
router.post('/category', isAuthentication, new CreateCategoryController().handle)
router.get('/category', isAuthentication, new listCategoryController().handle)

//ROTAS PRODUCT
router.post('/product', isAuthentication, upload.single('file'), new CreateProductContoller().handle)
router.get('/category/product', isAuthentication, new ListeByCategoryController().handle)

//ROTAS ORDER
//ORDER
router.post('/order', isAuthentication, new CreateOrderController().handle)
router.delete('/order', isAuthentication, new RemoveOrderController().handle)
//ITEM
router.post('/order/add', isAuthentication, new AddItemController().handle)
router.delete('/order/remove', isAuthentication, new DelItemController().handle)

router.put('/order/send', isAuthentication, new SendOrderController().handle)

//Lista pediddos finalizados
router.get('/orders', isAuthentication, new ListOrderController().handle)

//DETALHES DO PEDIDO
router.get('/order/detail', isAuthentication, new DetailOrderController().handle)

//FINALIZAR PEDIDO
router.put('/order', isAuthentication, new FinishOrderController().handle)


export { router }