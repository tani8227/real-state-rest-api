import db from "../model/index.js";
import bcrypt from "bcrypt"
const User = db.User;
const fetchUser = async ({ email, password }) => {
    const user = await User.findOne(
        {
            where:
            {
                email: email
            }
        });
    if (!user) {
        return null;
    } else {
        const match = await bcrypt.compare(password, user.password);
        return user;
    }
}

export default fetchUser;