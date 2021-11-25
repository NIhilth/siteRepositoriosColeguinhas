let userName = document.location.search
let rightUserName = userName.substr(1, userName.length)

function pegarUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/' + userName).then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Data:', data);
        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });

}

function pegarRepositorioGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/' + userName + '/repos').then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Data:', data);
        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}

function pegarApi(){
    pegarUserGithub(rightUserName)
}

pegarApi()

function criarPagina(){
    let container_imagem = document.createElement('div')
}