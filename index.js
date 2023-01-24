let d = document.getElementById("a");
let data = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((character) => {
    character.map((char) => {

        console.log(char)
      let container = document.getElementById("c");
      let title = document.createElement("p");
      let img = document.createElement("img");

      

       title.textContent = char.title;
       img.src = char.image

      container.appendChild(title);
      container.appendChild(img);

      
    });
  });
