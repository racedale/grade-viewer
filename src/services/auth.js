export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
export const handleLogin = ({ username, password }) => {
  if (username === process.env.GATSBY_USERNAME && password === process.env.GATSBY_PASSWORD) {
    return setUser({
      name: `app`,
    })
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.name
}
export const logout = (callback = () => {}) => {
  setUser({})
  callback()
}
