let films = [];
let filmsHtml = ``;
async function merr() {
  await fetch("http://localhost:3000/price")
    .then((res) => res.json())
    .then((data) => (films = data));

  for (let film of films) {
    filmsHtml += `
            <div  class="card" >
                    <a href="${film.a}" ><img src="${film.img}" class="card-img" alt=""></a>
                    <p class="card-cost" > ${film.cost} </p>
                    <p class="card-name" > ${film.name} </p>
                </div>
        `;
  }
  document.getElementById("veprimi").innerHTML = filmsHtml;
}

document.getElementById("btn-1").onclick = function() {
  let btnone = ``;
  let btnonevlera = document.getElementById("veprimi").value;
    for (let film of films) {
      filmsHtml += `
            <div  class="card" >
                    <a href="${film.a}" ><img src="${film.img}" class="card-img" alt=""></a>
                    <p class="card-cost" > ${film.cost} </p>
                    <p class="card-name" > ${film.name} </p>
                </div>
        `;
    }
    document.getElementById("veprimi").innerHTML = filmsHtml;
}

function search() {
  let filmatSearch = ``;
  let vlera = document.getElementById("searchValue").value;

  for (let film of films) {
    console.log(vlera);
    let result = film.name.includes(vlera.toUpperCase());
    if (result) {
      filmatSearch += `
                <div  class="card" >
                    <a href="${film.a}" ><img src="${film.img}" class="card-img" alt=""></a>
                    <p class="card-name" > ${film.name} </p>
                </div>
                `;
    }
  }
  console.log(filmatSearch);
  document.getElementById("veprimi").innerHTML = filmatSearch;
}

merr();