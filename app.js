function getRandomCat() {


  var catResponse = fetch("https://cataas.com/")
    .then(response =>
      response.blob())



  var mainSection = document.getElementById("main-section");
  mainSection.innerHTML = "";

  catResponse.then(response => {
    var catImage = new Image(250, 250);
    catImage.src = ("https://cataas.com/cat/cute");
    document.body.appendChild(catImage);
  })
}











