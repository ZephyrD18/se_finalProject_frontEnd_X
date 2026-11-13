import { SAVED_ARTICLES_KEY, sampleArticles } from "./constants";
import { readJson, writeJson } from "./storage";

function getStorageKey(token) {
  return `${SAVED_ARTICLES_KEY}:${token}`;
}

function readArticles(token) {
  return readJson(getStorageKey(token), sampleArticles);
}

export function getSavedArticles(token) {
  return Promise.resolve(readArticles(token));
}

export function saveArticle(article, token) {
  const savedArticle = { ...article, _id: crypto.randomUUID() };
  writeJson(getStorageKey(token), [savedArticle, ...readArticles(token)]);
  return Promise.resolve(savedArticle);
}

export function deleteArticle(articleId, token) {
  const articles = readArticles(token).filter((item) => item._id !== articleId);
  writeJson(getStorageKey(token), articles);
  return Promise.resolve({ _id: articleId });
}
