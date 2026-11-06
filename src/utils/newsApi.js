import {
  NEWS_API_BASE_URL,
  NEWS_API_KEY,
  NEWS_PAGE_SIZE,
  SEARCH_PERIOD_DAYS,
} from "./constants";

// 2026-11-05T14:30:00.000Z -> "2026-11-05"
function toIsoDate(date) {
  return date.toISOString().slice(0, 10);
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function normalizeArticle(article, keyword) {
  return {
    keyword,
    title: article.title,
    text: article.description || article.content || "",
    date: article.publishedAt,
    source: article.source?.name || "",
    link: article.url,
    image: article.urlToImage,
  };
}

function isUsableArticle(article) {
  return (
    article.title &&
    article.title !== "[Removed]" &&
    article.url &&
    article.urlToImage
  );
}

export function searchNews(keyword) {
  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - SEARCH_PERIOD_DAYS);

  const params = new URLSearchParams({
    q: keyword,
    from: toIsoDate(from),
    to: toIsoDate(to),
    pageSize: NEWS_PAGE_SIZE,
    apiKey: NEWS_API_KEY,
  });

  return fetch(`${NEWS_API_BASE_URL}?${params}`)
    .then(checkResponse)
    .then((data) =>
      data.articles
        .filter(isUsableArticle)
        .map((article) => normalizeArticle(article, keyword)),
    );
}
