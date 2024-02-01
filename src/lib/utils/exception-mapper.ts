interface IExceptionMapper {
  [key: string]: {
    title: string;
    description: string;
  };
}

export const exceptionMapper: IExceptionMapper = {
  Unauthorized: {
    title: 'Помилка авторизації',
    description: 'Неправильний логін або пароль',
  },
  AlreadyRegisteredException: {
    title: 'Помилка реєстрації',
    description: 'Користувач з такими даними вже існує',
  },
  NotFoundException: {
    title: 'Не зеайдено',
    description: 'Не знайдено',
  },
};
