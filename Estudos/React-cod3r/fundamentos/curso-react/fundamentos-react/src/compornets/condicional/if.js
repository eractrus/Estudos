export default (props) => {
    if (props.preco >= 10 && props.preco <= 200) {
        return props.children
    } else {
        return false
    }

}