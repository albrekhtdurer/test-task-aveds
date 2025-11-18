import usersData from "./constants/users.json" assert { type: "json" };

export const checkAuthorization = () => {
  const userName = localStorage.getItem('userName');
  const userLogin = localStorage.getItem('userLogin');

  return {
    name: userName,
    login: userLogin,
  }
}

export const login = (login: string, password: string) => {
  const usersArray = usersData.users;
  const currentUser = usersArray.find((user) => user.login === login);

  const result = !currentUser
    ? {
        user: null,
        error: "Пользователь не найден",
      }
    : currentUser.password !== password
    ? {
        user: null,
        error: "Неверный пароль",
      }
    : { user: currentUser, error: "" };
  
  if (!result.error && result.user) {
    localStorage.setItem('userName', result.user.name);
    localStorage.setItem('userLogin', result.user.login);

  }
  return result;
};

export const logout = () => {
  localStorage.removeItem('userName');
  localStorage.removeItem('userLogin');
}