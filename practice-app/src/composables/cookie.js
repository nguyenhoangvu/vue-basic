import Cookie from 'js-cookie'

const cookie = (token) => {
  Cookie.set('token', token)
}

const getTokenFromCookie = () => {
  const token = Cookie.get('token')
  return token
}

export { cookie, getTokenFromCookie }
