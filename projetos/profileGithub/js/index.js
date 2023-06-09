


function getUsers() {

    const userName = document.querySelector('#dataUser').value
    const url = `https://api.github.com/users/${userName}`
  
   fetch(url)
        .then(res => res.json())
        .then(data => {
            avatarUser.src = data.avatar_url
            if (data.name == undefined) {
                alert('User Invalid !')
                window.location.reload()
            } else {
                document.querySelector('.card').style.display = 'flex'
                user.textContent = `Name: ${data.name}`
                userLocation.textContent = `Location: ${data.location}`
                userBio.textContent = `BIO:${data.bio}`
                userRepository.textContent = `Number repository: ${data.public_repos}`
            }


        })
        .catch(error => console.log(error))

    document.querySelector('#dataUser').value = ""
}
