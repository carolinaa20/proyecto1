let isBlack = false;  

const btn = document.querySelector("#darkModeButton");
const gridItem = document.querySelectorAll(".grid-item");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  if(isBlack){
    document.body.style.backgroundColor = "#f3e5d8";
    document.body.style.color = "black";
    gridItem.forEach(item => item.style.backgroundColor = "#fff");
    gridItem.forEach(item => item.style.color = "black");
    isBlack = false

  }else{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "black";
    gridItem.forEach(item => item.style.backgroundColor = "#2F2F2F");
    gridItem.forEach(item => item.style.color = "white");
    isBlack = true
  }
});