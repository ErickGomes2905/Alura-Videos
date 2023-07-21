
const formulario = document.querySelector("[data-formulario]")

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });
  if(!conexao.ok) {
    throw new Error("Não foi possivel enviar o video")
  }

  const conexaoConvertida = await conexao.json();

return conexaoConvertida;


}


async function criarVideo(evento) {
  evento.preventDefault()

  const titulo = document.querySelector("[data-titulo]").value;
  const url = document.querySelector("[data-url]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const descricao = Math.floor(Math.random() * 10).toString();
  try{
    await criaVideo(titulo, descricao, url, imagem )

    window.location.href = "../pages/envio-concluido.html"
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener("submit", evento => criarVideo(evento));