import { getData,createCard } from "./function.js";

const wrapper = document.getElementById("wrapper")
// console.log(wrapper);

document.addEventListener('DOMContentLoaded',function(){

// const category = document.querySelector('select');
getData("https://cars-pagination.onrender.com/products")
.then((data) =>{
data.forEach(el => {
  if(el.id > 10 && el.id < 23){
  let card = createCard(el);
  console.log(card);
  wrapper.innerHTML += card
  }
});
})
.catch((error) => {
  return error;
})
})
