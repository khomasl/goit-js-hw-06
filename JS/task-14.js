// Задача. Почты пользователей
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// Пиши код ниже этой строки
// const getUserEmails = users => {
    

// };
// Пиши код выше этой строки

// Пиши код ниже этой строки
const getUserEmails = users => {
  return users.map(user => user.email);    

};
// Пиши код выше этой строки