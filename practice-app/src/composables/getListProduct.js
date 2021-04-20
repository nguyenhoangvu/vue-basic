import { getTokenFromCookie } from './cookie'
import axios from 'axios'
import { ref } from "vue";

const getListProduct = () => {
  const products = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const token = getTokenFromCookie()
      console.log('vu token: Bearer ', token)
      let data = await axios({
        method: 'get',
        url: 'http://10.0.2.15:6969/api/CMS/get-list-product',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      products.value = data.data.result;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { products, error, load }
}

export default getListProduct