
async function listaVideos () {
  
  try{
  const conexao = await fetch("http://localhost:3000/videos")
  const conexaoConvertida = await conexao.json()
  geraVideos(conexaoConvertida)
  return conexaoConvertida;
  } catch {
    const lista = document.querySelector("[data-lista]")
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de videos</h2>`
  }
}


async function buscaVideo(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}
