import bcrypt from "bcrypt";
import db from "../model/index.js";
const User = db.User;

const signupService = async ({ name, email, phone, role, password }) => {

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
        name,
        email,
        phone,
        role,
        password: hashPassword,
    });
    return user;
}

export default signupService;