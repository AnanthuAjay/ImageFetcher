const divForImg = document.getElementById("img-box");

function makeRequestToUnsplash(url){
  fetch(url)
    .then( res => res.json())
    .then((data) => {
    //we are actually using the returned data from the API here
    // data.results contains an array of objects so we can use an array method here to iterate
        data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });
    });
}
// the function createImage() below is a helper function used to generate an image tag for use in our web page
function createImage(imageObj){
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  // styling for the elements
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "600px";
  image.style.height = "500px";
  image.style.border = "double 4px black"
  imageDiv.append(image);
  divForImg.append(imageDiv);
}
//each call to makeRequestToUnsplash() returns data with 10 images in it
function activate(){
    const divForImg = document.getElementById("img-box");
    //enter your api key where it says YOUR_ACCESS_KEY
    let query=document.getElementById("search").value;
    let url="https://api.unsplash.com/search/photos?page=1&query="+query+"&client_id=f82A2p0jYCSXHJxZoKpYZMO4K622ljQoHqnDwVewiZ0";
    makeRequestToUnsplash(url);
    let url1="https://api.unsplash.com/search/photos?page=2&query="+query+"&client_id=f82A2p0jYCSXHJxZoKpYZMO4K622ljQoHqnDwVewiZ0";
    makeRequestToUnsplash(url1);
}
