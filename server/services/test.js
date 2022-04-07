// a function to retrieve a blob of json by using a ajax request and 'fetch' function
//https://rallycoding.heroku

/*function fetchAlbums(){
    fetch('')
    .then (res => res.json() )
    .then(json => console.log(json));
}*/

//E2015 syntax
/*
async function fetchAlbums() {
  const res = await fetch("");
  const json = await res.json();
  console.log(json);
}
*/

//using arrow function
const fetchAlbums = async () => {
  const res = await fetch("");
  const json = await res.json();
  console.log(json);
};

fetchAlbums();
