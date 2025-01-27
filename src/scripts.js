document.addEventListener("DOMContentLoaded", function() {
    fetch('rss_feed.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const items = xml.querySelectorAll("item");
            const feedContainer = document.getElementById("rss-feed");

            items.forEach(item => {
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;

                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.href = link;
                anchor.textContent = title;

                listItem.appendChild(anchor);
                feedContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching the RSS feed:', error));
});