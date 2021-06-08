// Задача. Пользователи в возрастной категории
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => ((minAge < user.age) && (user.age < maxAge))); 
};
// Пиши код выше этой строки