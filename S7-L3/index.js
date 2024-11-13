const getFilms = () => {
  fetch('https://striveschool-api.herokuapp.com/books?') // URL
    .then((response) => {
      console.log('response', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nella response dal server!')
      }
    })
    .then((film) => {
      console.log('Ecco i film: ', film)
      const row = document.getElementById('films-row')
      film.forEach((films) => {
        const col = document.createElement('div')
        col.classList.add('col', 'mb-3')
        col.innerHTML = `<div class="card h-100 ">
               <img
                 src="${films.img}"
                 class="card-img-top w-100" 
                 id="film-poster"
                 alt="film poster"
               />
               <div class="card-body">
                 <h5 class="card-title">${films.title}</h5>
                 <p class="card-text">
                   ${films.price} €
                 </p>
                 <button class="btn btn-primary">Scarta film</button>
               </div>
             </div>
           `
        col.querySelector('.btn').addEventListener('click', () => {
          col.remove()
        })
        row.appendChild(col)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

getFilms()
