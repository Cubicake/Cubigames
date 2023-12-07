document.addEventListener('DOMContentLoaded', async function () {
    const newsContainer = document.getElementById('news-container');

    // Fetch news articles from the "news-articles" folder
    const response = await fetch('news-articles.json');
    const articles = await response.json();

    // Display each news article
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'news-item';
        articleDiv.innerHTML = article.content;
        newsContainer.appendChild(articleDiv);
    });
});
