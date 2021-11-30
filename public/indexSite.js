let procurar = document.createElement('input')
procurar.type = "text"
procurar.className = "procurar"
document.body.appendChild(procurar)

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
    { nome: "João Henrique Meirles da Silva", user: "Nihilth" },
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
    nomePessoa.className = "nomePessoa"
    nomePessoa.innerText = "Nome: " + celulaNome
    linha.appendChild(nomePessoa)

    let userNamePessoa = document.createElement('div')
    userNamePessoa.className = "nome"
    userNamePessoa.innerText = "User name: " + celulaUsername
    linha.appendChild(userNamePessoa)

    function irPraPagina() {
        let nomeEscolhido = celulaUsername
        location.href = "./userPages/pageInfo.html?" + nomeEscolhido;
    }

    let botaoConta = document.createElement('button')
    botaoConta.innerText = "Ver informações de " + celulaUsername
    botaoConta.onclick = irPraPagina
    linha.appendChild(botaoConta)

    return linha
}

let corpo = document.querySelector('body');
let botao = document.createElement('button');

function criarConteudo() {
    let titulo = document.createElement('p')
    titulo.innerText = "Cadastre-se"
    titulo.className = "titulo"

    let main = document.createElement('div')

    let nome = document.createElement('div')
    nome.className = "subtitulo"
    nome.innerText = "Nome"
    main.appendChild(nome)

    let inputNome = document.createElement('input')
    inputNome.className = "input"
    inputNome.placeholder = "Nome"
    main.appendChild(inputNome);

    let userName = document.createElement('div')
    userName.className = "subtitulo"
    userName.innerText = "User name"
    main.appendChild(userName)

    let inputSobrenome = document.createElement('input')
    inputSobrenome.className = "input3"
    inputSobrenome.placeholder = "Sobrenome"
    main.appendChild(inputSobrenome);

    let botao1 = document.createElement('button')
    botao1.innerText = "Cancelar"
    botao1.className = "botao1"

    let botao2 = document.createElement('button')
    botao2.innerText = "Cadastrar"
    botao2.className = "botao2"

    let retorno = {
        header: titulo,
        cont: main,
        rodape1: botao1,
        rodape2: botao2
    }

    return retorno
}

function criaModal(titulo, conteudo, rodape1, rodape2) {
    let title = titulo
    let cont = conteudo
    let footer1 = rodape1
    let footer2 = rodape2

    let tela = document.createElement('div')
    tela.className = "tela-modal"
    document.body.appendChild(tela)

    let modal = document.createElement('div');
    modal.className = "container";
    document.body.appendChild(modal);

    setTimeout(tela.style.backgroundColor = "rgb(128,128,128, 0.6)", 3000)

    modal.appendChild(title)
    modal.appendChild(cont)
    modal.appendChild(footer1)
    modal.appendChild(footer2)

    let tudo = {
        fundo: tela,
        caixa: modal
    }

    return tudo;
}

function abreModalCadastro() {
    let conteudo = criarConteudo()
    let modal = criaModal(conteudo.header, conteudo.cont, conteudo.rodape1, conteudo.rodape2)

    function acabar() {
        modal.fundo.remove()
        modal.caixa.remove()
    }

    function lerValorBotao() {
        valorInputNome = document.querySelector('.input').value
        valorInputSobrenome = document.querySelector('.input3').value

        if (valorInputNome == "" || valorInputSobrenome == "") {
            let alerta = document.createElement('div')
            alerta.className = "alerta"
            alerta.innerText = "Algum Campo está Vazio!"
            conteudo.cont.appendChild(alerta)
        } else {
            let infoPessoa = {
                nome: valorInputNome,
                user: valorInputSobrenome,
            }

            list.push(infoPessoa)

            console.log(list)

            acabar()

            function quadradoVerde() {
                let cadastroConcluido = document.createElement('div')
                cadastroConcluido.className = "concluido"
                cadastroConcluido.innerText = "Cadastro feito com sucesso!"
                corpo.appendChild(cadastroConcluido)

                function excluiQuadrado() {
                    cadastroConcluido.remove()
                }

                setTimeout(excluiQuadrado, 3000)
            }

            quadradoVerde()

            criarLista()

        }
    }
    conteudo.rodape2.onclick = lerValorBotao
    conteudo.rodape1.onclick = acabar

    return modal
}

function criarLista() {
    let listAtual = document.querySelector('ul')
    if (listAtual) {
        listAtual.remove()
    }

    let lista = document.createElement('ul')
    lista.id = "Lista"

    list.forEach(function (e) {
        linha = lista.appendChild(criarLinha(e.nome, e.user))
    })

    let botaoAdd = document.createElement('button')
    botaoAdd.innerText = "Clique para Cadastrar mais um user"
    botaoAdd.onclick = abreModalCadastro
    lista.appendChild(botaoAdd);

    document.body.appendChild(lista)
}

function funcaoFiltroNome() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.procurar');
    filter = input.value.toUpperCase();
    ul = document.querySelector("#Lista");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector(".nome");
        txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function funcaoFiltroUsernome() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.procurar');
    filter = input.value.toUpperCase();
    ul = document.querySelector("#Lista");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector(".nomePessoa");
        txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

procurar.onkeyup = funcaoFiltroNome,funcaoFiltroUsernome

criarLista()


