// import { ref } from "vue";
import axios from 'axios'
import { cookie } from './cookie'

const getToken = async (username, password) => {
  let token = null;
  let error = null;

  try {
    let bodyJSON = {
      username: username,
      password: password
    }
    let data = await axios({
      method: "post",
      url: 'http://10.0.2.15:6969/api/Identity/login-cms',
      data: bodyJSON,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });

    token = data.data.result.token;
    cookie(token)
    return token
  } catch (err) {
    error = err.message;
    console.log(error);
  }
}

export default getToken