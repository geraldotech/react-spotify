const searchInput = document.getElementById('search-input')
const resultsArtist = document.querySelector('#result-artist')
const playlistContainer = document.getElementById('result-playlists')

console.log(playlistContainer)

function requestApi(searchTerm) {
  fetch(`${process.env.REACT_APP_API}/artists?name_like=${searchTerm}`)
    .then((res) => res.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  hidePlayList()
  const artistName = document.getElementById('artist-name')
  const artistImage = document.getElementById('artist-img')
  result.forEach((ele) => {
    artistName.innerText = ele.name
    artistImage.src = ele.urlImg
  })

  resultsArtist.classList.remove('hidden')
}

function hidePlayList() {
  playlistContainer.classList.add('hidden')
}

document.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm === '') {
    resultsArtist.classList.add('hidden')
    playlistContainer.classList.remove('hidden')
    return
  }
  requestApi(searchTerm)
})

// GRID INTELIGENTE
const container = document.querySelector('.offer__list-item')

const observer = new ResizeObserver(() => {
  //mudanças no tamanho do elemento
  const containerWidth = container.offsetWidth //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
  const numColumns = Math.floor(containerWidth / 200) //número de colunas com base na largura do container

  //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`

  console.log({ container })
  console.log({ numColumns })
})
//observando a mudança do elemento
observer.observe(container)
