export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('token'));
  console.log(user + "     auth header ");
    if (user) {
      return { Authorization:  user };
    } else {
      return {};
    }
  }