export const getCurrentDateTime = () => {
  const months = [
    'янв',
    'фев',
    'мар',
    'май',
    'июн',
    'июл',
    'авг',
    'сент',
    'окт',
    'ноя',
    'дек',
  ];

  const weekdays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  const date = new Date();

  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = weekdays[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else if (minutes >= 10 || minutes < 60) {
    minutes = `${minutes}`;
  }

  return { dayOfMonth, month, year, hours, minutes, dayOfWeek };
};
