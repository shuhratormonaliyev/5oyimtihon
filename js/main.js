import { getData, createCard,createDetailCard } from './function.js';


document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.getElementById("wrapper");
const select = document.querySelector("#Popularity")
    getData("https://cars-pagination.onrender.com/products")
        .then((data) => {
            data.forEach(el => {
                if (el.id > 10 && el.id < 23) {
                    let card = createCard(el);
                    wrapper.innerHTML += card;
                }
                
            });
            select.addEventListener('change',function(){
            wrapper.innerHTML = ''
            data.forEach(el => {
              if(this.value === el.category){
              let card = createCard(el);
              wrapper.innerHTML += card;
              const cards = this.querySelectorAll(".card")
            console.log(cards);
            cards.length > 0 && cards.forEach(el => {
              console.log(el);
              el.addEventListener('click',function(event){
              const id = this.getAttribute("data-id");
              // console.log(id);
              if (id) {
                window.location.assign(`https://5oyimtihon.vercel.app/main.html?id=${id}`);
              }
              })
            });
              }
            });
            })
            const cards = this.querySelectorAll(".card")
            console.log(cards);
            cards.length > 0 && cards.forEach(el => {
              console.log(el);
              el.addEventListener('click',function(event){
              const id = this.getAttribute("data-id");
              // console.log(id);
              if (id) {
                window.location.assign(`https://5oyimtihon.vercel.app/main.html?id=${id}`);
              }
              })
            });
        })
        .catch((error) => {
            console.error(error);
        });
});




