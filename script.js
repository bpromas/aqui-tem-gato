import pages from "./story.js";

let img = document.querySelector(".illustration img");
let story = document.querySelector(".story");
let optionContainer = document.querySelector(".options");
let optionBtns = document.querySelectorAll(".options button");

function turnPage(e) {
  const goto = e.target.dataset.goto;
  var newPage = pages.find((page) => page.id === parseInt(goto));

  img.src = `pics/${goto}.jpg`;

  rewriteStory(newPage.paragraphs);

  rewriteOptions(newPage.options);
}

function rewriteStory(paragraphs) {
  story.innerHTML = "";
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.innerHTML = paragraph;
    story.append(p);
  });
}

function rewriteOptions(options) {
  optionContainer.innerHTML = "";
  // <button class="option" data-goto="2">otro gato</button>
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.dataset.goto = option.goto;
    btn.innerHTML = option.text;
    btn.addEventListener("click", turnPage);
    optionContainer.append(btn);
  });
}

optionBtns.forEach((option) => {
  option.addEventListener("click", turnPage);
});
