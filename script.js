let button = document.querySelector('#button-log')
let formlog = document.querySelector('.form')
let denied = document.createElement("span")

denied.setAttribute('id', 'error')
denied.style = "display:block; width:100%; color: #9e2626; text-align:center; margin-top: 10px; "
formlog.appendChild(denied)

button.addEventListener('click', () => {

    let usermail = document.querySelector('#user-e')
    let userpass = document.querySelector('#user-p')
    usermail.style = "none"
    userpass.style = "none"

    if (usermail.value == "admin" & userpass.value == "123") {
        logininit.style = "animation: fade 2s;"
        setTimeout(whoam, 1500)
    }
    else if (usermail.value.length == 0 || userpass.value.lenght == 0) {
        denied.innerHTML = `Faltam informações!`
        usermail.style = "border: 1px solid #e87c03;"
        userpass.style = "border: 1px solid #e87c03;"
    }

    else {
        denied.innerHTML = `O Usuário ou a Senha está Incorreta!`
    }
})

let header = document.querySelector('initon')
let logininit = document.querySelector('.login-init')

function whoam() {

    document.body.removeChild(logininit)
    let who = document.createElement('div')
    who.setAttribute('class', 'whoami')
    document.body.appendChild(who)

    let whoami = document.querySelector('.whoami')

    whoami.innerHTML = `
    <header> <img id="logo" src="img/netflix-logo.png"> </header> 
    <div class="content">

        <h2> Quem está assistindo? </h2> 
        <div class="users"> 

        <div id="user">
        <img id="userim" class="im1" src="img/prof1.jpg">
        <h3 id="username"> User1 </h3>
        </div>
        
        <div id="user">
        <img id="userim" class="im2" src="img/prof2.jpg">
        <h3 id="username"> User2 </h3>
        </div>

        <div id="user">
        <img id="userim" class="im3" src="img/prof3.jpg">
        <h3 id="username"> User3</h3>
        </div> 
        
        <div id="user">
        <img id="userim" class="im4" src="img/prof4.jpg">
        <h3 id="username"> User4</h3>
        </div    

        </div>
    </div>`

    var im1 = document.querySelector('.im1')
    im1.addEventListener('click', () => {
        whoami.style = "animation: entmain 2s;"
        setTimeout(main, 1600)
    })

    var im2 = document.querySelector('.im2')
    im2.addEventListener('click', main)

    var im3 = document.querySelector('.im3')
    im3.addEventListener('click', main)

    var im4 = document.querySelector('.im4')
    im4.addEventListener('click', main)
}

function main() {

    let whoami = document.querySelector('.whoami')
    document.body.removeChild(whoami)

    let maan = document.createElement('div')
    maan.setAttribute('class', 'maincont')
    document.body.appendChild(maan)

    let maincont = document.querySelector('.maincont')

    maincont.innerHTML = `<header> 

    <img id="logo" src="img/netflix-logo.png"> 

    <ul class="navmenu"> 
    <li> Início </li>
    <li> Series</li>
    <li> Filmes</li>
    <li> Bombando</li>
    <li> Minha Lista</li>
    </ul>
    </header>
    
    <div class="sername"> 
    <img src="img/desen-log.png">
    <span> Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara.
     E com um elfo e um demônio como parceiros, levar o rei à loucura será uma tarefa fácil. </span> 
    <h4> Assistir </h4>
    </div>

    <section class="secvideo">
    <video id="back" src="img/desencanto.mp4" autoplay></video> 
    </section>    
    `
    setTimeout(() => {

        let secvideo = document.querySelector('.secvideo')
        var bane = document.createElement('div')
        bane.setAttribute('class', 'banner')
        secvideo.appendChild(bane)



    }, 102000)


}