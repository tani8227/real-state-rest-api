import bcrypt from "bcrypt";

const checkPasswordService = (password, hashPassword) => {
    const match = bcrypt.compare(password, hashPassword);
    return match;
}

export default checkPasswordService;