let userName = document.location.search
let rightUserName = userName.substr(1, userName.length)
let user_Container = document.createElement('div')
document.body.appendChild(user_Container)
let user_Repo_Container = document.createElement('div')
document.body.appendChild(user_Repo_Container)


function pegarInfoGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName).then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Data:', data);
            let info = {
                nome: data.name,
                login: data.login,
                icon: data.avatar_url
            }

            const icone = document.createElement('img')
            icone.src = info.icon
            user_Container.appendChild(icone)

            const nomeUsuario = document.createElement('p')
            nomeUsuario.innerText = "Nome do usuário: " + info.nome
            user_Container.appendChild(nomeUsuario)

            const username = document.createElement('p')
            username.innerText = "Nome de login: " + info.login
            user_Container.appendChild(username)

        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}
function pegarReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos').then(function (resultado) {
        resultado.json().then(function (repos) {
            console.log('Data:', repos);
            repos.forEach(function(e){
                const linha = document.createElement('div')
                linha.className = "linha-repositorios"
                const linkRepo = document.createElement('a')
                linkRepo.href = e.html_url
                linkRepo.innerText = e.html_url

                linha.innerText = "Nome de repositório: " + e.name + " Link do repositório: "
                linha.appendChild(linkRepo)
                user_Repo_Container.appendChild(linha)
            })
        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}


pegarInfoGithub(rightUserName)
pegarReposGithub(rightUserName)