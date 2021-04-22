// import axios from 'axios'
import { ref } from "vue";
import { request } from './common'

const getProduct = (nv) => {
  const product = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      let data = await request('get', 'http://10.0.2.15:6969/api/CMS/get-list-product', nv)

      product.value = data.data.result;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { product, error, load }
}

export default getProduct