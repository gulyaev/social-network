export const required = value => {
    if (!value) return "Обязательное поле";
    
    return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return 'Превышена максимальная длина сообщения в ' + maxLength + ' символов';
    
    return undefined;
}