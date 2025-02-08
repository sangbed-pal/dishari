import bcrypt from "bcrypt";

const encryptPassword = async (req, res, next) => {
    const password = req.body.password;
    const saltRounds = 10;

    req.body.password = await bcrypt.hash(password, saltRounds);

    next();
}

export default encryptPassword;