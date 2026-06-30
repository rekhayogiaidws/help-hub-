function searchContent() {

  let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let text = card.innerText.toLowerCase();

    if(text.includes(input)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

}
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function saveVisit(category){
  localStorage.setItem("recentVisit", category);
}

window.onload = function(){

  let recent =
  localStorage.getItem("recentVisit");

  if(recent){

    document.getElementById("recentVisit")
    .innerHTML =
    "🕒 Recently Visited: <strong>" +
    recent +
    "</strong>";

  }

}
function searchStudentCards(){

  let input =
  document.getElementById("studentSearch")
  .value
  .toLowerCase();

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    let text =
    card.innerText.toLowerCase();

    if(text.includes(input)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

} 
function filterCards(category){

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    if(
      category === "all" ||
      card.dataset.category === category
    ){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

}
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  if(nav){
    nav.classList.toggle("active");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function searchContent(){

  let input =
  document.getElementById("searchInput")
  .value
  .toLowerCase();

  let sections =
  document.querySelectorAll("section");

  sections.forEach(section => {

    let text =
    section.innerText.toLowerCase();

    if(text.includes(input)){
      section.style.display = "block";
    }else{
      section.style.display = "none";
    }

  });

}
