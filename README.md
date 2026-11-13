# News Explorer (Frontend)

News Explorer lets you search recent news on any topic and keep the articles you care about in a personal collection. This repository contains the frontend, built with React and Vite as the final project for the TripleTen Software Engineering program.

**Live site:** https://zephyrd18.github.io/se_finalProject_frontEnd_X/

## Features

- **News search.** Finds articles from the past week through NewsAPI and shows them three at a time, with a "Show more" button to load the rest.
- **Clear feedback.** A loading animation while results are on the way, a friendly message when nothing matches, and an error message if the request fails.
- **Remembers your last search.** Results are still there when you come back to the page.
- **Accounts.** Sign-up and sign-in popups with live form validation and clear error messages. You stay signed in after a page refresh.
- **Saved articles.** Signed-in users can bookmark articles from the search results and manage them on a protected Saved articles page, which also summarizes the keywords they've saved under.
- **Responsive layout.** Designed for desktop, tablet and phone, with a dropdown menu on small screens and no horizontal scrolling down to 320px.

## Built With

- React 19
- React Router 7
- Vite 8
- Plain CSS following the BEM methodology, with locally hosted fonts and normalize.css
- ESLint
- GitHub Pages (via the `gh-pages` package)

## Getting Started

You'll need [Node.js](https://nodejs.org/) and a free API key from [newsapi.org](https://newsapi.org/).

1. Clone the repository and install the dependencies:

   ```bash
   git clone https://github.com/ZephyrD18/se_finalProject_frontEnd_X.git
   cd se_finalProject_frontEnd_X
   npm install
   ```

2. Create a file named `.env.local` in the project folder with your API key:

   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```

   This file is ignored by Git, so your key stays on your machine.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:5173/se_finalProject_frontEnd_X/ in your browser.

## Scripts

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Starts the development server                    |
| `npm run build`   | Builds the production version into `dist`        |
| `npm run preview` | Serves the production build locally              |
| `npm run lint`    | Checks the code with ESLint                      |
| `npm run deploy`  | Builds the site and publishes it to GitHub Pages |

## Project Structure

```
src/
├── components/   One folder per component, each with its JSX and CSS
├── contexts/     React context for the signed-in user
├── hooks/        Custom hook for form validation
├── images/       Icons, card images and other graphics
├── utils/        News search, authentication, saved articles and helpers
└── vendor/       Fonts and normalize.css
```

## Current Stage

This is Stage 1 of the project, which focuses on the frontend. Sign-up, sign-in and saved articles are handled by placeholder modules that store data in the browser's localStorage, so accounts only exist in the browser where they were created. These modules return Promises just like real API calls, so they can be swapped for the backend in the next stage without changing the components.

In development, searches go directly to NewsAPI. The deployed site sends them through TripleTen's NewsAPI proxy, because NewsAPI's free plan only accepts requests from localhost.
