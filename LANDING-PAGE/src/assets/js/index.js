// function menuResponsivo(){
//   const header = document.getElementById('header')
//     if (header.style.display == 'block'){
//         header.style.display = 'none'
//         document.getElementById('menuimg').src = "/src/assets/img/menu.svg" 
//     }
//     else{
//         header.style.display = 'block'
//         mobilebnt.style.display = 'block'
//         document.getElementById('menuimg').src = "src\assets\img\close.svg"
//     }
//     }

  function modeDark() {

    let elemento = document.getElementById("htmldark");
    let botao = document.getElementById("dark_mode");
    let botaolight = document.getElementById("light_mode");
  
    elemento.classList.toggle("dark");
  };

function projeto(){
  const indexmain = document.getElementById('indexMain');
  const projeomain = document.getElementById('indexMain');
  

  indexmain.style.display = 'none'
  

}

// function sectionprojeto() {
//   console.log (sectionProjeto)

//   const sectionProjeto = document.getElementById("projeto");

//     sectionProjeto.innerHTML = "<h1 class='text-stone-950'>Bem-vindo à Página Inicial</h1><p>Este é o conteúdo da página inicial.</p>";
// };

// <body>
//     <header>
//         <button id="homeButton">Home</button>
//         <button id="aboutButton">Sobre</button>
//         <button id="contactButton">Contato</button>
//     </header>
//     <div id="content"></div>

//     <script src="seuarquivo.js"></script>
// </body>

var h1 = document.createElement('h1');
var h1title = document.createTextNode('h1 funcionou')

h1.appendChild(h1title);
function teste(){
  console.log(h1)

}