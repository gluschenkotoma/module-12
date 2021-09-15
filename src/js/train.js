import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';

//ссылки
const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};
console.log(refs.searchForm);
// ====================================ВАРИАНТ 1=================================================
// fetchPokemon();

// // фу-я
// function fetchPokemon() {
//   fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then(response => {
//       return response.json(); //распарсили ответ бека
//     })
//     // ВАРИАНТ2
//     .then(renderPokemonCard) //ВАРИАНТ1 перенесен в отдельную фу-ю renderPokemonCard

//     //   ВАРИАНТ1
//     //   .then(pokemon => {
//     // console.log(pokemon);
//     // const murkup = pokemonCardTpl(pokemon); // разметка pokemonTpl, pockemon ответ сервера с response.json
//     // console.log(murkup);
//     // refs.cardContainer.innerHTML = murkup; //отрисовка
//     // })

//     .catch(error => {
//       console.log(error);
//     });
// }

// // фу-я создания разметки
// function renderPokemonCard(pokemon) {
//   console.log(pokemon);
//   const murkup = pokemonCardTpl(pokemon); // разметка pokemonTpl, pockemon ответ сервера с response.json
//   console.log(murkup);
//   refs.cardContainer.innerHTML = murkup; //отрисовка
// }

// .then(renderPokemonCard)- передача ссылки на функцию
// .then(renderPokemonCard()) - передача вызова функции, в then пойдет ее результат

// ======================================ВАРИАНТ 2===================================================

// fetchPokemon() - промис - результат response.json()
// .then(renderPokemonCard) - если все ок - создание разметки
//  .then(error => console.log(error)); - если не ок - ошибка
// fetchPokemon()
//   .then(renderPokemonCard)
//   .then(error => console.log(error));

// //   фу-я которая идет на сервер, берет покемона, разпарсит его и вернет промис - результат response.json()
// function fetchPokemon() {
//   return fetch('https://pokeapi.co/api/v2/pokemon/2').then(response => {
//     return response.json(); //распарсили ответ бека
//   });
// }

// // фу-я создания разметки
// function renderPokemonCard(pokemon) {
//   console.log(pokemon);
//   const murkup = pokemonCardTpl(pokemon); // разметка pokemonTpl, pockemon ответ сервера с response.json
//   console.log(murkup);
//   refs.cardContainer.innerHTML = murkup; //отрисовка
// }

//=================================ВАРИАНТ 3===================================================
// Как найти покемона по ID

// // fetchPokemon() - промис - результат response.json()
// // .then(renderPokemonCard) - если все ок - создание разметки
// //  .catch(error => console.log(error)); - если не ок - ошибка

// fetchPokemon(6) //ввод покемона по ID
//   .then(renderPokemonCard)
//   .catch(error => console.log(error));

// //   фу-я которая идет на сервер, берет покемона, разпарсит его и вернет промис - результат response.json()
// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     response => {
//       return response.json(); //распарсили ответ бека
//     },
//   );
// }

// // фу-я создания разметки
// function renderPokemonCard(pokemon) {
//   console.log(pokemon);
//   const murkup = pokemonCardTpl(pokemon); // разметка pokemonTpl, pockemon ответ сервера с response.json
//   console.log(murkup);
//   refs.cardContainer.innerHTML = murkup; //отрисовка
// }

//=================================ВАРИАНТ ПОИСК ПО ФОРМЕ===================================================

refs.searchForm.addEventListener('submit', onSearch); //слушатель

function onSearch(e) {
  e.preventDefault();

  // значение инпута во время сабмита формы

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  // fetchPokemon() - промис - результат response.json()
  // .then(renderPokemonCard) - если все ок - создание разметки
  //  .catch(onfetchError)); - если не ок - вызови onfetchError
  // .finally(()=>{form.reset()}) - после всего , очистить форму

  fetchPokemon(searchQuery) //searchQuery - динамический ввод в форме
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

//   фу-я которая идет на сервер, берет покемона, разпарсит его и вернет промис - результат response.json()
function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json(); //распарсили ответ бека
    },
  );
}

// фу-я создания разметки
function renderPokemonCard(pokemon) {
  console.log(pokemon);
  const murkup = pokemonCardTpl(pokemon); // разметка pokemonTpl, pockemon ответ сервера с response.json
  console.log(murkup);
  refs.cardContainer.innerHTML = murkup; //отрисовка
}

//.catch(onFetchError)
function onFetchError(error) {
  alert('Что то пошло не так!');
}
