import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);

    router.get('/get-crud', homeController.get_CRUD);
    router.get('/edit-crud', homeController.getEditCRUD);

    router.post('/update-crud', homeController.updateCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.hanleLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;