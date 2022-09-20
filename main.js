const api_url_trending = `https://api.giphy.com/v1/gifs/trending?api_key=t2xmSJ9UhIzYgKzWOhfK6oWFk5V0cQ2B`;
const api_url_search = `https://api.giphy.com/v1/gifs/search`;
let buscar = "?q=";
const apikey = `&api_key=t2xmSJ9UhIzYgKzWOhfK6oWFk5V0cQ2B`;

let q = "";
urlCompleta ="";

const boton = document.getElementById("boton");

const traerDestacados = async () => {
    await fetch(api_url_trending).then ((Response) => {
        return Response.json();
    }).then((giphy) => {
        console.log(giphy);

        for(let i = 0; i <giphy.data.length; i++){
            const gif = document.createElement("img");
            gif.src = giphy.data[i].images["original"].url;
            document.getElementById("galeria").appendChild(gif);
        }
    })
}
traerDestacados();

boton.onclick = () => {
    document.getElementById('galeria').innerHTML = "";
    q = document.getElementById('search').value;
    urlCompleta = api_url_search + buscar + q + apikey;
    getData();
}

const getData = async () => {
    await fetch(urlCompleta).then ((response) => {
        return response.json();
    }).then((giphy) => {
        console.log(giphy);

    for(let i = 0; i <giphy.data.length; i++){
        const gif = document.createElement("img");
        gif.src = giphy.data[i].images["original"].url;
        document.getElementById("galeria").appendChild(gif);
    }
    })
}