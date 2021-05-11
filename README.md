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

<img width="49%" src="https://user-images.githubusercontent.com/73153617/117763195-60c69480-b265-11eb-932c-32e440daaaf8.png">
<img width="49%" src="https://user-images.githubusercontent.com/73153617/117763186-5c01e080-b265-11eb-857b-27be7b5261f2.png">
<img width="28%" src="https://user-images.githubusercontent.com/73153617/117763227-6e7c1a00-b265-11eb-9478-1631a83b11be.png">
<img width="18%" src="https://user-images.githubusercontent.com/73153617/117763230-6fad4700-b265-11eb-8dc9-9775935850e6.png">

## 4. About Project

Demo Link ⇒

### 🔑 Login Page

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117763549-f5c98d80-b265-11eb-9d25-8b1ea7bd7569.gif">

    - Login with Google or Github or Facebook

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117763977-b485ad80-b266-11eb-9e75-08b8d95e2476.gif">

    - If you are logged in, you will be logged in automatically even if you return to the login page.

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117763677-2c070d00-b266-11eb-83a1-06339e595a79.gif">

    - Even if you log out, your card information will be shown again when you log in again.

### 📝 Maker Page

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117764255-29f17e00-b267-11eb-9829-67281714cb8c.gif"/>

    - Enter information on the left maker side, upload a image and press the add button, you will see the result on the right preview side.

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117764268-2f4ec880-b267-11eb-82cc-8fe31c925bdd.gif"/>

    - If you edit information in the left maker section, you can see a preview of your business card in the preview side at the same time.

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117764264-2cec6e80-b267-11eb-93f3-6bca5b5407e7.gif"/>
    
    - Add and Delete 
    
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
