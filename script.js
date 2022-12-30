/////////////// Cotação Dolar
https: fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log('Cotacao Dolar: ')
    console.log(data)
    const firstPostTitle = data.USDBRL.ask
    document.getElementById('dollar').value = firstPostTitle
  })
/////////////// Cotação Euro
https: fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log('Cotacao Euro: ')
    console.log(data)
    const firstPostTitle = data.EURBRL.ask
    document.getElementById('euro').value = firstPostTitle
  })
/////////////// via cep
const cep = document.getElementById('cepIn').value
//const adress = 'https://viacep.com.br/ws/'+ cep + '/json'
//https: fetch('https://viacep.com.br/ws/25525270/json')
https: fetch('https://viacep.com.br/ws/' + cep + '/json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log('CEP: ')
    console.log(data)
    const firstPostTitle = data.logradouro + ' ' + data.localidade
    const element = document.getElementById('cep')
    /*element.addEventListener('input', () => {
      element.style.width = `${input.scrollWidth}px`
    })*/
    element.value = firstPostTitle + ' '
  })

// Primeiro, definimos a URL da API que queremos consumir
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// Em seguida, usamos o método fetch() para fazer uma solicitação à API
fetch(apiUrl)
  .then(response => response.json()) // Convertemos a resposta em um objeto JavaScript
  .then(data => {
    console.log(data)
    // Aqui, podemos acessar os dados retornados pela API
    // Vamos pegar o título do primeiro post e escrever em um campo de texto
    const firstPostTitle = data[6].body
    const theDocument = document.getElementById('output')

    theDocument.value = firstPostTitle
  })
