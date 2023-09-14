
const user = <t>() => {

    let user: t

    const getUser = (): t => { return user }
    const setUser = (nome: t): string => { user = nome; return 'Nome alterado com sucesso !' }
    return { getUser, setUser }
}

const user01 = user<string | number>()

console.log(user01.setUser('Maria'))
console.log(user01.getUser())

console.log(user01.setUser('João'))

console.log(user01.getUser())
