# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![mobile](https://github.com/miteshp98/article-preview-component-master/assets/145320555/fccaada0-56e2-4d9a-b020-25a1ae845436)


### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/article-preview-component-master)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/article-preview-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Dom Manipulation
- Event Listener

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned to Use event listener and css styling.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.share-popup {
  width: 230px;
  height: 50px;
  background-color: var(--VeryDarkGrayishBlue);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.244);
  position: absolute;
  left: 20px;
  bottom: 40px;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
}
```

```js
shareBtn.addEventListener("click", function () {
  sharePopup.classList.toggle("active");
});
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I am excited to share that I recently completed a challenging project which significantly improved my development skills. This accomplishment has fueled my passion for continuous learning and growth in the field. As I move forward, my primary focus will be on honing my ability to build robust logic and design intuitive, user-friendly interfaces. I am eager to tackle new challenges that will allow me to deepen my understanding and expertise in both logic and frontend UI development.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
