import { User } from "../model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function register(name: string, email: string, password: string) {
    try {
        return {
            response : await User.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password, 12)
        }), status:201
    }
    } catch (error) {
        return {
            response: 'bad request',
            status:400
        }
    }
}
async function login(email: string, password: string) {
    try {
        const userData = await User.findOne({where:{
            email: 
            email
        }});
        if(!bcrypt.compareSync(password, JSON.parse(userData))){
            return {
                response: 'wrong username or password',
                status:401            
            }
        }
    const token = jwt.sign({ userData }, process.env.JWT_SECRET as string)
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