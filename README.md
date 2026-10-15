# Godswill Orugbo, portfolio (React + Vite)

Live URL after deploy: https://orugbogodswill.github.io

## Fastest way: let the agent in Antigravity push it

1. Unzip this folder and open it in Antigravity (File > Open Folder).
2. Before pushing, on GitHub rename your old portfolio repo
   `orugbogodswill.github.io` to `orugbogodswill.github.io-OLD`
   (repo Settings > General > Repository name).
3. Paste this prompt into the Antigravity agent:

> Push this whole project to my GitHub as a new public repo named `orugbogodswill.github.io` under the account `OrugboGodswill`, on the `main` branch. Then turn on GitHub Pages with the source set to "GitHub Actions" (the workflow is already in `.github/workflows/deploy.yml`). When the workflow finishes, give me the live website URL.

If the agent says it is not logged in to GitHub, sign in when it asks (for example with `gh auth login`) and tell it to continue.

## Or do it yourself (terminal, inside this folder)

    git init
    git add .
    git commit -m "New portfolio"
    git branch -M main
    git remote add origin https://github.com/OrugboGodswill/orugbogodswill.github.io.git
    git push -u origin main

Create the empty repo first on github.com (New repository, name `orugbogodswill.github.io`, no README).
Then in the repo: Settings > Pages > Build and deployment > Source: **GitHub Actions**.
Wait about a minute (see the Actions tab). The site is then live at https://orugbogodswill.github.io

## Edit your content
Everything is in `src/data.js`: bio, skills, experience, projects, live apps, certifications.
- **Certificate links:** paste each URL as the third item of its row in `certifications`.
- **Photo:** replace `public/profile.jpg`.
- Push again (`git add . && git commit -m "update" && git push`) and the site updates itself.

## Run locally
    npm install
    npm run dev
