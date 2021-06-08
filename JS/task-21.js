// Задача. Список друзей
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// Пиши код ниже этой строки
// const getFriends = (users) => {
   
// };
// Пиши код выше этой строки

// Пиши код ниже этой строки
const getFriends = (users) => {
  const allFriends = users.flatMap(user => user.friends);
  return allFriends.filter((user, index, users) => users.indexOf(user) === index);
};
// Пиши код выше этой строки
