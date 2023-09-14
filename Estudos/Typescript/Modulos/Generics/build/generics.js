"use strict";
const user = () => {
    let user;
    const getUser = () => { return user; };
    const setUser = (nome) => { user = nome; return 'Nome alterado com sucesso !'; };
    return { getUser, setUser };
};
const user01 = user();
console.log(user01.setUser('Maria'));
console.log(user01.getUser());
console.log(user01.setUser('João'));
console.log(user01.getUser());
