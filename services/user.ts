import { User } from "../model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function register(userObject: any) {
    try {
        return {
            response : await User.create({
                name: userObject.name,
                email: userObject.email,
                password: bcrypt.hashSync(userObject.password, 12)
        }), status:201
    }
    } catch (error) {
        return {
            response: 'bad request',
            status:400
        }
    }
}
async function login(userLoginObject: any) {
    try {
        const userData = await User.findOne({where:{
            email: 
            userLoginObject.email
        }});
        if(!bcrypt.compareSync(userLoginObject.password, userData.password)){
            return {
                response: 'wrong username or password',
                status:401            
            }
        }
    const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET as string)
    return {
        response: token,
        cookie: token,
        status: 200
    }
    } catch (error) {
        return {
            response: 'wrong username or password',
            status:401
        }
    }
}

export {
    register, 
    login
}