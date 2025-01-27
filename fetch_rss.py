import feedparser
import requests

RSS_URL = "https://horomary.hatenablog.com/rss"

response = requests.get(RSS_URL)
feed = feedparser.parse(response.content)

with open("rss_feed.xml", "w", encoding="utf-8") as f:
    f.write(response.text)