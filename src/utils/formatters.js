export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getKeywordsByPopularity(articles) {
  const counts = {};
  articles.forEach(({ keyword }) => {
    counts[keyword] = (counts[keyword] || 0) + 1;
  });
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}

export function formatKeywords(keywords) {
  if (keywords.length <= 2) return keywords.join(" and ");
  if (keywords.length === 3)
    return `${keywords[0]}, ${keywords[1]}, and ${keywords[2]}`;
  return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other`;
}
