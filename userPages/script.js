let userName = document.location.search
let rightUserName = userName.substr(1, userName.length)
let listReposName = []

function pegarInfoGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName).then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Data:', data);
            let info = {
                nome: data.name,
                login: data.login,
                icon: data.avatar_url
            }
            return info
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
                listReposName[e] = e.name
            })

            console.log(listReposName)
        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}


function pegarInformacao() {
    let info = pegarInfoGithub(rightUserName)
    let repos = pegarReposGithub(rightUserName)

}

function criarPagina() {
    let container_imagem = document.createElement('div')
    let container_nomes = document.createElement('div')
    let container_reposritorios = document.createElement('div')


}

pegarInformacao()