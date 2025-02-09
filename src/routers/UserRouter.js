const express = require('express')
const userController = require ('../controllers/UserControlleur')
const userRouter = express.Router()
const { auth } = require ('../middlewares/Auth')

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.get('/:id', auth, userController.getUserById);
userRouter.put('/:id', auth, userController.updateUser);
userRouter.delete('/:id', auth, userController.deleteUser);
userRouter.get('/', userController.getAllUsers);


module.exports = userRouter;
