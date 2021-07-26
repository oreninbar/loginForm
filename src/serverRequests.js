import axios from "axios";

const getUser = async (email) => {
  try {
    let result = await axios.get(`http://localhost:8080/user/${email}`);
    if (result) return result.data;
    else return null;
  } catch (error) {
    console.log(error);
  }
};

const saveUser = (user) => {
  try {
    let result = axios.post("http://localhost:8080/register_user", user);
    if (result) console.log("saveUser");
    else console.log("didnt save User");
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
export { saveUser };
