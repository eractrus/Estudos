export default (props) => {
    if (props.test) {
        return props.children
    } else {
        return 'seja bem vindo aluno'
    }

}

