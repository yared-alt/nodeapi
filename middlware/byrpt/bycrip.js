import bcrypt from "bcrypt";

export const hashh = async (password) => {
    const salt = 10;
    const hashedPass = await bcrypt.hash(password, salt);
    return hashedPass;
}
export const cheker = async (password, hashedPass) => {
    const result = await bcrypt.compare(password, hashedPass);
    return result;
} 