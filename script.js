function Movies() {
    let Api = document.getElementById("input").value;
    let ApiUrl = ` http://www.omdbapi.com/?t=${Api}&apikey=3ca6e694`;

    getapi(ApiUrl);
    async function getapi(url) {
      let response = await fetch(ApiUrl);
      var data = await response.json();
      show(data);
    }
    function show(data) {
      document.getElementById("Title-1").innerHTML = data.Genre;
      document.getElementById("Title-2").innerHTML = data.Released;
      document.getElementById("Title-3").innerHTML = data.Runtime;
      document.getElementById("Title-4").innerHTML = data.Writer;
      document.getElementById("Title-5").innerHTML = data.Actors;
    }
  } 