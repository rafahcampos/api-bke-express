import {getAll} from "../../models/userModel.js";

const userList = async (req, res) => {
    res.json(users);
};

export default userList;