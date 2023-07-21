
const elementoInserirVideos = document.querySelector('[data-lista]')

function geraVideos(listaDeVideo) {
  elementoInserirVideos.innerHTML = ""

  listaDeVideo.forEach(video => {
    elementoInserirVideos.innerHTML += `
    <li class="videos__item">
            <iframe width="100%" height="72%" src="${video.url}"
                title="${video.titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${video.imagem}" alt="logo canal alura">
                <h3>${video.titulo}</h3>
                <p>${video.descricao}</p>
            </div>
        </li>
    `
  });
}

// function constroiCard(titulo, descricao, url, imagem) {
//   const video = document.createElement("li")
//   video.classname = "videos__item"
//   video.innerHTML = `
//   <iframe width="100%" height="72%" src="${url}"
//   title="${titulo}" frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen></iframe>
//   <div class="descricao-video">
//     <img src="${imagem}" alt="logo canal alura">
//     <h3>${titulo}</h3>
//     <p>${descricao}</p>
//   </div>
// `
//   return video
// }

// async function listaVideo() {
//   const listaApi = await conectaApi.listaVideos();
//   listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
// }

listaVideos()