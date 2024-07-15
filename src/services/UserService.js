const {User} = require('../models/Index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {

    async registerUser({email, password, role}){
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({ email, password: hashedPassword, role});
        return  user;                    
    }

    async loginUser({ email, password }){
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({id: user._id, role: user.role}, process.env.ACCES_TOKEN_SECRET, {expiresIn: '1h'});
        return {token, user};
    }

    async getUserById(userId){
        return await User.findById(userId);
    }

    async updateUser(userId, userData) {
        try {
            if (userData.password) {
                userData.password = await bcrypt.hash(userData.password, 10);
            }
            const [rowsUpdated, [updatedUser]] = await User.update(userData, {
                where: { id: userId },
                returning: true,
                plain: true
            });

            if (rowsUpdated === 0) {
                throw new Error('User not found');
            }

            return updatedUser;
        } catch (error) {
            throw new Error('Unable to update user: ' + error.message);
        }
    }

    async deleteUser(userId) {
        return await User.destroy({
            where: {id: userId} })
    }

    async getAllUser(){
        return await User.findAll()
    }
    
}

module.exports = new UserService();