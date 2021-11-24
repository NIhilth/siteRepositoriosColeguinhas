const tabela = document.createElement('table')
document.body.appendChild(tabela)





function pegarUserGithub(userName){
    fetch('https://api.github.com/users/' + userName).then(function(resultado) {
        resultado.json().then(function(data) {
            console.log('Data:', data);
        });
    }).catch(function(erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
    
}

function pegarRepositorioGithub(userName){
    fetch('https://api.github.com/users/' + userName + '/repos').then(function(resultado) {
    resultado.json().then(function(data) {
        console.log('Data:', data);
    });
}).catch(function(erro) {
    console.log('Bruno')
    console.log("erro:", erro);
});

}