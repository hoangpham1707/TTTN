import db from "../models/index";
import CRUDService from "../services/CRUDService"

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    }
    catch (e) {
        console.log(e);
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    let data = await CRUDService.getAllUser();
    return res.render('signIn.ejs');
}

let get_CRUD = async (req, res) => {

    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {
            userData: userData
        });

    }
    else {
        return res.send("Not found");
    }

}

let updateCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser,
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;

    if (id) {
        let allUser = await CRUDService.deleteUserById(id);
        //return res.send('OK')
        return res.redirect('back')
    }
    else {

    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    get_CRUD: get_CRUD,
    getEditCRUD: getEditCRUD,
    updateCRUD: updateCRUD,
    deleteCRUD: deleteCRUD,
}