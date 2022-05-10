const businessBtn = document.getElementById("sp1");
const sportsBtn = document.getElementById("sp2");
const technologyBtn = document.getElementById("sp3");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

var newsDataArr = [];
const API_KEY = "b66ca8f7d0654ba197556efaa1258fac";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";

businessBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Business News</h4>";
    fetchBusinessNews();
});
sportsBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Sports News</h4>";
    fetchSportsNews();
});
technologyBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Technology News</h4>";
    fetchTechnologyNews();
});

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // Handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // Handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // Handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

function displayNews() {
    newsDetails.innerHTML = "";

    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement("div");

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.style.color = "black";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = 'text-primary';
        dateHeading.innerHTML = date[0];

        var link = document.createElement('a');
        link.className = "btn  btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read More";

        var description = document.createElement('p');
        description.className = "text-muted"
        description.innerHTML = news.description;

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col);
    });
}