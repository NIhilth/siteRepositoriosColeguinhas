let userName = document.location.search
let rightUserName = userName.substr(1, userName.length)

console.log(rightUserName)

function pegarUserGithub(userName) {
    fetch('https://api.github.com/users/' + userName).then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Data:', data);
        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });

}

function pegarRepositorioGithub(userName) {
    fetch('https://api.github.com/users/' + userName + '/repos').then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Data:', data);
        });
    }).catch(function (erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}