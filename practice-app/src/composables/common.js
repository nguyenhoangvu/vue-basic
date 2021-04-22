import { getTokenFromCookie } from './cookie'
import axios from 'axios'

let token = getTokenFromCookie()

const IS_TOKEN_EXISTED = token

const HEADER = IS_TOKEN_EXISTED ? { 'Authorization': 'Bearer ' + token }
  : { 'Content-Type': 'application/json; charset=UTF-8' }

export const request = (method, url, params, data) => axios({
  method: method,
  url: params ? url + '/' + params : url,
  data: data ? data : {},
  headers: HEADER
})