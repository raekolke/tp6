window.onload = function() {
  document.getElementById('title').style.fontSize = '65px'
}

titleClick = document.querySelector("#titleBanner h1");
titleClick.onclick = function() {
  titleClick.classList.toggle("clicked");
}

listClick1 = document.querySelector("div#ingredients");
listClick1.onclick = function() {
  listClick1.classList.toggle("ingredientsClicked");
}

listClick2 = document.querySelector("div#equipment");
listClick2.onclick = function() {
  listClick2.classList.toggle("equipmentClicked");
}

listClick3 = document.querySelector("div#directions");
listClick3.onclick = function() {
  listClick3.classList.toggle("directionsClicked");
}

x = document.getElementById("enjoy");
x.innerHTML = "Enjoy!";
x.style.fontSize = '40px';
x.style.fontFamily = 'Noto Sans JP';
x.style.textAlign = 'center';