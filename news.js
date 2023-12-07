document.addEventListener('DOMContentLoaded', async function () {
    const newsContainer = document.getElementById('news-container');

    // Fetch the list of news article file locations from the "news-articles.json" file
    const response = await fetch('news-articles/article-list.json');
    const articleLocations = await response.json();

    console.log("Article Locations:", articleLocations); // Log the fetched article locations

    // Load and display each news article
    for (const articleLocation of articleLocations) {
        console.log("Fetching Article:", articleLocation); // Log the current article being fetched

        const articleResponse = await fetch(articleLocation);
        const article = await articleResponse.json();

        console.log("Fetched Article Data:", article); // Log the fetched article data

        const articleDiv = document.createElement('div');
        articleDiv.id = article.id; // Set the id attribute for the article div
        articleDiv.className = 'news-item';
        articleDiv.innerHTML = article.content; // Update this line
        newsContainer.appendChild(articleDiv);
    }

    // Check if there's a fragment identifier in the URL and scroll to the corresponding news item
    const fragmentId = window.location.hash.substring(1);
    if (fragmentId) {
        const targetElement = document.getElementById(fragmentId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
