import {getAll} from "../../models/userModel.js";

const userList = async (req, res) => {
    const user = await getAll();
    res.json(users);
};

export default userList;