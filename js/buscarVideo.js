async function buscarVideo(evento) {
  evento.preventDefault()

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await buscaVideo(dadosDePesquisa)
  

  const lista = document.querySelector("[data-lista]")

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild)
  }

  geraVideos(busca)

  if(busca.length == 0) {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com este termo</h2>`
  }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento))