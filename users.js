const getDataBase = () => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    // //  method: 'GET',
    // headers:{
    //    Authorization: 'xxxxx'
    //    'Content-Type': 'application/json'
    // }
  })
    .then((response) => {
      console.log('SIAMO NEL THEN')
      console.log('RESPONSE', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    })
    .then((data) => {
      console.log('UTENTI:', data)
    })
    .catch((error) => {
      console.log(error)
    })
}

getDataBase()
