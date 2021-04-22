// import { getTokenFromCookie } from './cookie'
// import axios from 'axios'
import { ref } from "vue";
import { request } from './common'

const getListProduct = () => {
  const products = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // const token = getTokenFromCookie()
      let data = await request('get', 'http://10.0.2.15:6969/api/CMS/get-list-product');

      products.value = data.data.result;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { products, error, load }
}

export default getListProduct