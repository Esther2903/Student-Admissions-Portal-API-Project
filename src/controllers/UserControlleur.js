const userService = require ('../services/UserService')
const { validateUser } = require('../validations/UserValidation');

class UserController {

    async registerUser(req, res, next){
        try{
            const {error} = validateUser(req.body);
            if (error) {
                return res.status(400).send({ error: error.details[0].message });
            }
            const userData = {
                email: req.body.email,
                password: req.body.password,
            }
            const user = await userService.registerUser(userData)
            res.status(201).send({message: "User registered successfuly", user: user})
        }catch(error){
            next(error);
        }
    }
    async loginUser(req, res, next){
        try{
            const {error} = validateUser(req.body);
            if (error) {
                return res.status(400).send({ error: error.details[0].message });
            }
            const userData = {
                email: req.body.email,
                password: req.body.password,
            };
            const {token, user} = await userService.loginUser(userData);
            res.json({token, user});
        }catch(error){
            next(error);
        }
    }

    async getUserById(req, res, next){
        try{
            const user = await userService.getUserById(req.params.id)
            if(!user){
                return res.status(404).send({err : 'User not found!'})
            }
            res.status(200).send(user)
        }catch(error){
            next(error)
        }
    }

    async updateUser(req, res, next){
        try{
            const user = await userService.updateUser(req.params.id, req.body)
            if(!user){
                return res.status(404).send({err : 'User not found!'})
            }
            res.status(200).send(user)
        }catch(error){
            next(error)
        }
    }

    async deleteUser(req, res, next){
        try{
            const user = await userService.deleteUser(req.params.id)
            if(!user){
                return res.status(404).send({err : 'User not found!'})
            }
            res.send({message: 'user deleted successfully!'})
        }catch(error){
            next(error)
        }
    }

    async getAllUsers(req, res, next){
        try{
            const users = await userService.getAllUser()
            res.send(users)
        }catch(error){
            next(error);
        }
    }
}

module.exports = new UserController()