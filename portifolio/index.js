

const altBlockInfo = () => {
    let about = document.querySelector('.about')
    let btn = document.querySelector('#btn')

    if (about.classList.toggle('none')) {
        btn.textContent = 'Sobre mim'
    } else {
        btn.textContent = 'Meus projetos'

    }

}

fetch('https://api.github.com/users/eractrus')
    .then(resp => resp.json())
    .then(data => {
        imageProfile.src = data.avatar_url
        nameProfile.textContent = data.name
        bioProfile.textContent = data.bio
    })
    .catch(error => console.error(error))