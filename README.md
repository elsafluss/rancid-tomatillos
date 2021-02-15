# Title
---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Contributions](#Contributions)
- [Authors](#Authors)
---
## Introduction

Which movies were released in 2020? Were they any good? Wonder no more! Randy's Totoos* is here to help!
*legally distinct from Rancid Tomatillos

When you visit the site, you're transported to the distant past, when people went to movie theaters. View the posters for all movies released in 2020 and click on each of them for more details.

This app was built according to [this spec](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html) and gave us a solid working knowledge of three new technologies: [React](https://reactjs.org/), [Cypress](https://www.cypress.io/), and [React Router](https://reactrouter.com/). We focused on making sure that we were organized from the beginning, and we kept the end goal in mind while working through each small issue. We enjoyed celebrating the wins, and we reached out for help when we got stuck.

## Features

To view please:
- please visit [here](https://github.com/elsafluss/rancid-tomatillos/) to interact and view

### Categories:
- [Home Page](#Home-Page)

- [Selecting a Movie](#Selecting-a-movie)

- [Going Back to the Home Page](#Going-back-to-the-Home-Page)

- [Error Message](#Error-Message)

- [Cypress User Flow Testing](#Cypress-User-Flow-Testing)

#### Home Page
Upon navigating to our landing page, users see the available movies.

<details>
<summary>Example of Mobile Experience</summary>
<br>
 <img width="283" alt="all movies" src="https://user-images.githubusercontent.com/70095063/107731695-d6958100-6cb3-11eb-9580-cbf191a082d5.png">
</details>

#### Selecting a Movie
A user can scroll through our movies and select a movie to gain further details on that film.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="selecting Onward" src="https://media.giphy.com/media/zIcgOXSX5cnDSOqdOu/giphy.gif">
</details>

<details>
<summary>Example of Desktop Experience</summary>
Note: hovering abilities exist on desktop & not on mobile.
<br>
<img width="500" alt="scrolling through desktop view" src="https://media.giphy.com/media/qjKbpHqCYsTCrKJYZN/giphy.gif">
</details>

#### Going Back to the Home Page
Once a user is done reading the film's details, they then can click the home icon to return the the landing page.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="navigating to home"src="https://media.giphy.com/media/mYgdbke1WUK4esKJWv/giphy.gif">
</details>

<details>
<summary>Example of Desktop Experience</summary>
Note: hovering abilities exist on desktop & not on mobile.
<br>
<img width="500" alt="navigating to home on the desktop"src="https://media.giphy.com/media/3TjIb4h6bDEx1T1oXD/giphy.gif">
</details>

#### Error Message
If a problem with the API or perhaps the user wishes to navigate to a movie by using the url and makes a mistake, an error message will load so the user can become aware that there is a problem.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="navigating to home"src="https://media.giphy.com/media/z8GC8cC5V8zGV7ZYe7/giphy.gif">
</details>

#### Cypress User Flow Testing

<details>
<summary>Example of Cypress Experience</summary>
<br>
<img width="283" alt="testing user flow in cypress" src="https://media.giphy.com/media/P4NhDLMlkXlcwAKIcE/giphy.gif">
</details>

## Technologies
- React
- Router
- Cypress for Testing
- CSS
- HTML
- Lighthouse for accessibility auditing

## Future Iterations

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/elsafluss/rancid-tomatillos/issues).

## Contributions

Thank you <a href="https://github.com/eddiezane">Eddie Zaneski</a>, <a href="https://github.com/jaypeasee">JP Carey</a>, and <a href="https://github.com/adamvinueza/">Adam Vinueza</a> for your guidance and advice.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:gaj23/rancid.git <renameHere>`
- API documentation & endpoints are [here](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html)
- from there please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- cd into your local copy and run `npm install`
- Have Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and push up your work for review
Thank you.

## Author
<table>
    <tr>
        <td> Elsa Fluss <a href="https://github.com/elsafluss">GH</td>
        <td> Matthew Dean <a href="https://github.com/mattdeann">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/13261139?s=460&u=f25038a8142aee42289ea23cee45c22fa97888ca&v=4" alt="Elsa Fluss"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/69775071?s=460&u=ed7a3f6a01fe266c8e3ae6c5c735f6e0e92c4946&v=4" alt="Matthew Dean"
 width="150" height="auto" /></td>
</table>
