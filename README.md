# 💳 Business Card Maker App with React

_Make your business Card_

---

## 🔗 Index

1. [Purpose of this project](#1.-Purpose-of-this-project)
2. [Tech Stack](#2.-Tech-Stack)
3. [Over View](#3.-Over-View)
4. [About Project](#4.-About-Project)
5. [Architecture](#5.-Architecture)
6. [What I've learned](#6.-What-I've-learned)
7. [Issue](#7.-Issue)

## 1. Purpose of this project

- Learn how to route using React Router
- Learn how to manage user authentication using Firebase
- Learn how to use the Firebase's realtime database
- Learn how to use cloudinary to reseize and upload images

## 2. Tech Stack

<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="Firebase" src="https://img.shields.io/badge/firebase-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>

## 3. Over View

<img width="53%" src="https://user-images.githubusercontent.com/73153617/115197854-6c261480-a12c-11eb-9b0a-d4809cb279db.png">
<img width="22%" src="https://user-images.githubusercontent.com/73153617/115197860-6defd800-a12c-11eb-8c69-a48102eb9b9f.png">
<img width="14%" src="https://user-images.githubusercontent.com/73153617/115197846-6a5c5100-a12c-11eb-90ae-5327828993dc.png">

## 4. About Project

Demo Link ⇒

### 🔑 Login Page

<img width="49%" src="https://user-images.githubusercontent.com/73153617/115197991-8cee6a00-a12c-11eb-980a-1b21e7e26b1a.png">
<img width="49%" src="https://user-images.githubusercontent.com/73153617/115199964-b5776380-a12e-11eb-8d85-2c1c4b6fc113.png">
<img width="49%" src="https://user-images.githubusercontent.com/73153617/115199970-b7412700-a12e-11eb-926c-6685e7e30743.png">
<img width="49%" src="https://user-images.githubusercontent.com/73153617/115199976-b8725400-a12e-11eb-9662-22a69e5c033a.png">

    - Login with Google or Github or Facebook
    - Even if you log out, your card information will be shown again when you log in.

### 📝 Maker Page

<img width="100%" src="https://user-images.githubusercontent.com/73153617/115191332-3ed56880-a124-11eb-97c2-3e7585722feb.PNG"/>

    - If you enter information in the left editor section, you can see a preview of your business card in the right preview section at the same time.

## 5. Architecture

### 👑 Most popular videos (default page)

![structure1](https://user-images.githubusercontent.com/73153617/115323726-9676e100-a1c3-11eb-8ade-6e5294edd8af.png)

    1. When the app component mounted(useEffect()), get most popular videos using YouTube API.
    2. Send props to video list component, video item component.
    3. Render video items in video list.

### 🔎 Search by keyword

![structure2](https://user-images.githubusercontent.com/73153617/115323720-94148700-a1c3-11eb-9d14-4a6c431510d9.png)

    1. Get keyword from input.
    2. App state has changed.
    3. Get the corresponding videos.
    4. Update and render video list and item.

### 📺 Play video

![structure3](https://user-images.githubusercontent.com/73153617/115323723-95de4a80-a1c3-11eb-8261-55d9dca2b894.png)

    1. Video click.
    2. App state has changed.
    3. Get clicked item's video url using YouTube API.
    4. Show the video by ifram tag.

## 6. 📝 What I've learned

    - Understanding 'state' and 'props' of react
    - How to use React Hooks
    - How to use PostCSS
    - How to use Public API and Postman

## 7. 💥 Issue

    I wanted to include channel information in each video item, but there was an issu with over quota.
        => Sometimes I have to make the function simpler for the performence.
        => Distribute the quota using multiple api keys.
