const boxContainer=document.querySelector('.box-container');

async function getData() {
 const values=await (await fetch('./data.json')).json();
 for(value of values){
    boxContainer.innerHTML +=`
    <div class="box">
          <div class="box-left-side">
            <img src=".${value.icon}" alt="">
            <p class="title">${value.category}</p>
          </div>
          <div class="box-text">
            <p><span>${value.score}</span> / 100</p>
          </div>
    </div>`
 }
}

getData();