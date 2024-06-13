function getData() {
  const nome = document.getElementById('nome').value
  const idade = document.getElementById('idade').value
  const peso = document.getElementById('peso').value
  const altura = document.getElementById('altura').value

  return { nome, idade, peso, altura }
}

function submitData(){
  const data = getData()

  fetch('http://localhost:3000/documento', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json'
    }
  }).then(response=>response.json()).then(data=> console.log(data)).catch(error=>console.log(error.message))

}