document.addEventListener('DOMContentLoaded', async function () {
    const newsContainer = document.getElementById('news-container');

    // Fetch news articles from the "news-articles" folder
    const response = await fetch('news-articles.json');
    const articles = await response.json();

    // Display each news article
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.id = article.id; // Set the id attribute for the article div
        articleDiv.className = 'news-item';
        articleDiv.innerHTML = article.content;
        newsContainer.appendChild(articleDiv);
    });

    // Check if there's a fragment identifier in the URL and scroll to the corresponding news item
    const fragmentId = window.location.hash.substring(1);
    if (fragmentId) {
        const targetElement = document.getElementById(fragmentId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
