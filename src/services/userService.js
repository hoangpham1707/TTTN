import db from "../models/index";
import bcrypt from 'bcrypt';

let handleUserLogin = async (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);

            if (isExist) {

                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password'],
                    raw: true
                })

                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';

                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password'
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found`;
                }
                // resolve();
            }
            else {
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't...`;
            }

            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })

            if (user) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}