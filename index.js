const authorName = document.querySelector(".posts p");
const motHead = document.querySelector(".posts h2");
const motImg = document.querySelector(".posts img");
const nextBtn = document.querySelector(".posts button");

const updateDetails = (url, title, author) => {
  motImg.setAttribute("src", url);
  motHead.innerHTML = title;
  authorName.innerHTML = `@${author}`;
};

const generateQuote = () => {
  fetch(" https://meme-api.com/gimme/MotivationalQuotes")
  .then((response) => response.json())
  .then((data) => {
    updateDetails(data.url, data.title, data.author)
  });
};

nextBtn.addEventListener("click", generateQuote);
generateQuote();