const userService = require ('../services/UserService')

class UserController {

    async registerUser(req, res, next){
        try{
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

    async getUserById(req, res){
        try{
            const user = await userService.getUserById(req.params.id)
            if(!user){
                return res.status(404).send({err : 'User not found!'})
            }
            res.status(200).send(user)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async updateUser(req, res){
        try{
            const user = await userService.updateUser(req.params.id, req.body)
            if(!user){
                return res.status(404).send({err : 'User not found!'})
            }
            res.status(200).send(user)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async deleteUser(req, res){
        try{
            const user = await userService.deleteUser(req.params.id)
            if(!user){
                return res.status(404).send({err : 'User not found!'})
            }
            res.send({message: 'user deleted successfully!'})
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async getAllUsers(req, res){
        try{
            const users = await userService.getAllUser()
            res.send(users)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }
}

module.exports = new UserController()