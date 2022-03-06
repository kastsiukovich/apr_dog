const DOG_URL = 'https://api.thedogapi.com/v1/images/search';

const LOVE = document.querySelector('.love');
const DISLIKE = document.querySelector('.dislike');
let endTheSurvey = document.querySelector('#result');
const RES = document.querySelectorAll('.res')[0];
;
const DOG_FOTO = document.querySelector('.dog');
const DOG_RUSULT = document.querySelector('.dog-result-love');

const DOG_RESULT_DISLIKE = document.querySelector('.dog-result-dislike');
let love_foto = [];
let love_counter = 0;
let dislike_foto = [];
let dislike_counter = 0;

const START = () => {
   fetch(`${DOG_URL}`).then(
      response => {
         return response.json();
      }
   ).then(
      data => {
         const cardDogs = document.querySelector('.dog');
         data.forEach(item => {
            cardDogs.innerHTML = '';
            cardDogs.innerHTML = ` <img src="${item.url}" alt="dog">`
         })
      }
   )
}
START()

LOVE.addEventListener('click', () => {
   fetch(`${DOG_URL}`).then(
      response => {
         return response.json();
      }
   ).then(
      data => {
         const cardDogs = document.querySelector('.dog');
         data.forEach(item => {
            cardDogs.innerHTML = '';
            cardDogs.innerHTML = ` <img src="${item.url}" alt="dog">`
            love_foto.push(item.url);
            love_counter++
            console.log(love_counter)
         })
      }
   )
})

DISLIKE.addEventListener('click', () => {
   fetch(`${DOG_URL}`).then(
      response => {
         return response.json();
      }
   ).then(
      data => {
         const cardDogs = document.querySelector('.dog');
         data.forEach(item => {
            cardDogs.innerHTML = '';
            cardDogs.innerHTML = ` <img src="${item.url}" alt="dog">`
            dislike_foto.push(item.url);
            dislike_counter++
            console.log(dislike_counter)
         })
      }
   )
})
endTheSurvey.addEventListener('click', function () {
   RES.classList.remove('none');
   document.querySelector('.res').innerHTML = ` <li class="">Love foto ${love_counter}</li>
   <li class="">Dislike foto ${dislike_counter}</li>
   `
   DOG_RUSULT.innerHTML = '';
   DOG_RESULT_DISLIKE.innerHTML = '';
   love_foto.forEach(item => {
      DOG_RUSULT.classList.remove('none');
      DOG_RUSULT.innerHTML += `
      <img src="${item}" alt="dog-result-love">`
   })
   dislike_foto.forEach(item2 => {
      DOG_RESULT_DISLIKE.classList.remove('none');
      DOG_RESULT_DISLIKE.innerHTML += `<img src="${item2}" alt="dog-result-dislike">`
   })
})