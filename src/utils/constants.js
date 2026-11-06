import polarisImage from "../images/cards/polaris.jpg";
import mooseImage from "../images/cards/moose.jpg";
import yellowstoneImage from "../images/cards/yellowstone.jpg";
import lakeImage from "../images/cards/lake.jpg";
import corgiImage from "../images/cards/corgi.jpg";

export const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
export const sampleArticles = [
  {
    _id: "default-1",
    keyword: "Nature",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    date: "2020-11-04T00:00:00Z",
    source: "treehugger",
    link: "https://www.treehugger.com/",
    image: corgiImage,
  },
  {
    _id: "default-2",
    keyword: "Nature",
    title: "Nature makes you better",
    text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    date: "2019-02-19T00:00:00Z",
    source: "national geographic",
    link: "https://www.nationalgeographic.com/",
    image: lakeImage,
  },
  {
    _id: "default-3",
    keyword: "Yellowstone",
    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    text: "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
    date: "2020-10-19T00:00:00Z",
    source: "national geographic",
    link: "https://www.nationalgeographic.com/",
    image: yellowstoneImage,
  },
  {
    _id: "default-4",
    keyword: "Parks",
    title: "Grand Teton Renews Historic Crest Trail",
    text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
    date: "2020-11-04T00:00:00Z",
    source: "National parks traveler",
    link: "https://www.nationalparkstraveler.org/",
    image: mooseImage,
  },
  {
    _id: "default-5",
    keyword: "Photography",
    title: "Scientists Don't Know Why Polaris Is So Weird",
    text: "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
    date: "2020-03-16T00:00:00Z",
    source: "treehugger",
    link: "https://www.treehugger.com/",
    image: polarisImage,
  },
];
