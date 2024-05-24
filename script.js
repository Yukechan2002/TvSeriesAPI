document.querySelector("button").addEventListener("click", result);

async function result() {
  try {
    var ask = document.getElementById("Shows").value;
    var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
    var res = await data.json();
     
    console.log(res);
    fun(res);
    

    
  } catch (error) {
    console.log(error);
  }
}

function fun(res){
    
var container = document.createElement("div");
container.className="container";

var row = document.createElement("div");
row.className="row";

var device = document.createElement("div");
device.className = "col-lg-12 col-md-8 col-sm-6";

var card= document.createElement("div");
card.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${res[0].show.image.medium}" class="card-img-top" alt="${res[0].show.name}">
  <div class="card-body">
    <p class="card-text"><b>Showname: <br>${res[0].show.name}</b></p>
    <p class="card-text">Generes: ${res[0].show.genres[0]},${res[0].show.genres[1]} </p>
    
    <p class="card-text">Premiered Date: ${res[0].show.premiered} </p>
    <p class="card-text">Rating: ${res[0].show.rating.average} </p>
    <p class="card-text">Show Running Time: ${res[0].show.runtime} </p>
    <p class="card-text">Official Site: ${res[0].show.officialSite} </p>
     <p class="card-text">${res[0].show.network.name} </p>
    <p class="card-text"> ${res[0].show.network.country.name} </p>
     <p class="card-text"> ${res[0].show.summary} </p>


  </div>
</div>
`;

device.append(card);
row.append(device);
container.append(row);
document.body.append(container);
 

}

  