const list = [
    { nome: "Bruna  Alves Mafra", user: "BMafra" },
    { nome: "Bruno Henrique Verbinnen de Carvalho", user: "brunohvc" },
    { nome: "Camilly de Souza Pessotti", user: "camillyPessotti" },
    { nome: "Camilly Vitoria da Rocha Goltz", user: "VitoriaCamilly" },
    { nome: "Diego Planinscheck", user: "frst157" },
    { nome: "Eduarda Bolgenhagen De Campos", user: "eduardabolgenhagen" },
    { nome: "Ester Girelli", user: "Esterzinha12" },
    { nome: "Felipe Mielke Vieira", user: "FelipeMielkeVieira" },
    { nome: "Gustavo Rebelatto Zapella", user: "rebelattogustavo" },
    { nome: "Henrique Cole Fernandes", user: "HenriqueCole" },
    { nome: "João Henrique Meirles da Silva", user: "nihilth" },
    { nome: "Kenzo Hideaky Ferreira Sato", user: "Kenzohfs" },
    { nome: "Leonardo Heitor Poglia", user: "leopoglia" },
    { nome: "Leonardo Giuseppe de Souza Rafaelli", user: "LeonardoRafaelli" },
    { nome: "Matheus Franzener Hohmann", user: "MatheusFranzener" },
    { nome: "Otavio Augusto dos Santos", user: "SantOtavio" },
    { nome: "Otavio Matheus Neves", user: "otavionvs" },
    { nome: "Thiago Marins Braga", user: "ThiagoBrag" },
    { nome: "Vinícius Bonatti Benner", user: "viniciusz1" },
    { nome: "Vytor Augusto Rosa", user: "K43RU" }
]


function criarLinha(nome, userName) {
    let celulaNome = nome
    let celulaUsername = userName
    let linha = document.createElement('li')
    linha.id = "linha"

    let nomePessoa = document.createElement('div')
    nomePessoa.id = "nome"
    nomePessoa.innerText = "Nome: " + celulaNome
    linha.appendChild(nomePessoa)

    let userNamePessoa = document.createElement('div')
    userNamePessoa.id = "nome"
    userNamePessoa.innerText = "User name: " + celulaUsername
    linha.appendChild(userNamePessoa)

    let botaoConta = document.createElement('button')
    botaoConta.innerText = "Ver informações de " + celulaUsername
    botaoConta.onclick = 
    linha.appendChild(botaoConta)

    return linha
}

function criarLista() {
    let lista = document.createElement('ul')

    list.forEach(function (e) {
        linha = lista.appendChild(criarLinha(e.nome, e.user))
    })

    document.body.appendChild(lista)
}

criarLista()




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