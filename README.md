# Mario Memory

![Site Image](./assets/readme/site-image.png)

This is the website for Mario Memory; it is designed to be visually appealing, user-friendly, interactive, and accessible on all devices. It consists of a memory game that is themed around Mario.

[View live webpage](https://collingsandrew.github.io/milestone-two-project/index.html)

---

## User Experience (UX)

### Site Contents

- A Mario themed memory game.
- Instructions on how to play the game.
- A form that allows the user to contact the site owner.

### Target Audience

- Children.
- Young teenagers.
- Anyone with an interest in Mario.

### Project Purpose

The purpose of this project is to provide the user with a website on which they can take part in a fun memory game. It must have good design principles and provide significant interactive functionality.

### User Stories

#### Client Goals

1. I want the site to be simple to navigate and use.
2. I want to give the user the means of contacting the site owner.
3. I want the game to be intuitive and easy to understand, so that users of all ages can enjoy it.
4. I want the site to be accessible on multiple platforms (such as web, mobile, and tablets), so that users can play it on their preferred devices.
5. I want the site to have a visually appealing interface with good design principles and high-quality images, so that it attracts and engages users from the moment they visit.

#### User Goals

6. I want to take part in a fun game.
7. I want to read the instructions for the game.
8. I want to see how many cards I have matched so far.
9. I want to easily play again once the game is finished.
10. I want to see the game board with all the cards faced down initially so that I can begin the game.
11. I want to flip two cards at a time to match pairs so that I can progress through the game.
12. I want the cards to flip back if they don't match, so that I can try again.
13. I want the cards to stay flipped if they match.
14. I want the cards to be in a different position each game.
15. I want a timer to challenge myself to complete the game in the given time.
16. I want the option to restart the game.
17. I want visually appealing card designs and animations, so that the game is enjoyable to play.

## Accessibility

The site has been built with accessibility in mind to ensure that it is always a positive experience.

This has been achieved by:
- Semantic HTML.
- Choosing fonts and colours with high contrast.
- Adequate aria-labels for interactive features.
- Adequate alt attributes for images.

## Design

### Design Choices

The site has been designed to be consistent with the Mario theme; all images, colours and design choices have been made to make the user feel immersed in the world of Mario.

### Wireframes

<details>
<summary>Game Page</summary>
<img src="./assets/readme/wireframes/main-page-wireframe.png">
</details>
<details>
<summary>Modals</summary>
<img src="./assets/readme/wireframes/modal-wireframe.png">
</details>
<details>
<summary>Contact Modal</summary>
<img src="./assets/readme/wireframes/contact-modal-wireframe.png">
</details>
<details>
<summary>404 Page</summary>
<img src="./assets/readme/wireframes/404-page-wireframe.png">
</details>

### Typography

The following Google Fonts were used on this site:

- Catamaran is used for the headings on the site.

![Catamaran](assets/readme/fonts/catamaran-font.png)

- Roboto is used for the main text of the site.

![Roboto](assets/readme/fonts/roboto-font.png)

Both of these fonts have been sourced from the [Official Mario Website](https://mario.nintendo.com/) to maintain a consistent theme.

### Colour Scheme

The color scheme across the site has been chosen to maintain a consistent theme. The red colour choice, inspired by the [Official Mario Website](https://mario.nintendo.com/), ensures coherence with the franchise. Likewise, the blue color has been matched to Mario's iconic apron, maintaining the consistent theme.

<details>
<summary>Red</summary>
<img src="./assets/readme/colours/red.png">
</details>
<details>
<summary>Blue</summary>
<img src="./assets/readme/colours/blue.png">
</details>

## Features

- The site boasts a responsive design, ensuring accessibility across all device sizes.
- All images are of high quality and are chosen to align with the theme of the site.
- The design is simple, providing an immediate understanding of the site's purpose and the essence of the game.

User Stories: 3, 4, 5, 17

### Page Heading

- The moment the user enters the site, they are greeted by an image of Mario alongside the heading 'Mario Memory'.

User stories: 5
<details>
<summary>Preview</summary>
<img src="./assets/readme/features/page-heading-feature.png">
</details>

### Game Stats

- Displays a visible indicator showing the number of correct matches the user has made, allowing them to track their progress.
- Displays the remaining time until the end of the game, ensuring players can keep track of their progress.

User stories: 8, 15
<details>
<summary>Preview</summary>
<img src="./assets/readme/features/game-stats-feature.png">
</details>

### Game Board

- The game board consists of 16 cards, all with appealing designs adhering to the consistent theme.
- The cards are shuffled at the start of each game.
- The user can only flip two cards at a time.
- Unmatched cards are flipped back over.
- When two cards are matched, the cards remain flipped.
- High quality Mario themed images have been used for the card designs.

User stories: 5, 6, 10, 11, 12, 13, 16, 17
<details>
<summary>Preview Unflipped</summary>
<img src="./assets/readme/features/game-board-unflipped.png">
</details>
<details>
<summary>Preview Flipped</summary>
<img src="./assets/readme/features/game-board-flipped.png">
</details>

### New Game

- Allows the user to start a new game.
- Shuffles the cards each time the 'New Game' button is clicked.

User Stories: 9, 14, 16

### How To Play Modal

- Displays a modal upon clicking the 'How To Play' button.
- Provides the user with the goal of the game and instructions on how to play.
- Close button that hides the modal.

User Stories: 3, 7
<details>
<summary>Preview</summary>
<img src="./assets/readme/features/how-to-modal.png">
</details>

### Contact Us Modal

- Displays a modal upon clicking the 'Contact Us' button.
- Offers the user a form to complete, enabling communication with the site owner.
- Utilizes the emailjs API for transmitting completed forms to the site owner.
- Close button that hides the modal.

User Stories: 2
<details>
<summary>Preview</summary>
<img src="./assets/readme/features/contact-modal.png">
</details>

### Modals

- All modals follow the same consistent design and use high quality images.
- Alerts the user whether they have completed the game or that it is game over.
- Offers the user the option to play again.
- All cards shuffle when the user chooses to play again.

User Stories: 5, 9, 14, 16
<details>
<summary>Winning Modal</summary>
<img src="./assets/readme/features/winning-modal.png">
</details>
<details>
<summary>Game Over Modal</summary>
<img src="./assets/readme/features/game-over-modal.png">
</details>

## Deployment

### Deploying the project

GitHub pages were used to deploy this project. The following steps explain how this is done:

1. When logged into GitHub, locate and access the [repository.](https://github.com/collingsandrew/milestone-two-project)
2. Click on the settings link that is located at the top of the repository.
3. Using the menu to the left, follow the pages link.
4. Here, we then need to make sure the source drop-down box is set to 'deploy from branch'.
5. Finally, we set the branch to 'main' and the folder to 'root', and then click save.

The page should then refresh, and the link to the deployed website should appear at the top of the page.

### Fork

Forking a project creates a completely separate codebase and allows a user to make local changes to a project without affecting the original repository itself.

To fork the repository:

1. When logged into GitHub, locate and access the [repository.](https://github.com/collingsandrew/milestone-two-project)
2. At the top right of the repository, there will be a 'fork' option.

### Clone

Cloning a project allows a user to make contributions to the main repository, with permission.

To clone the repository:

1. When logged into GitHub, locate and access the [repository.](https://github.com/collingsandrew/milestone-two-project)
2. Above your files to the right, select the code drop down button and select either HTTPS, SSH or GitHub CLI and then copy the URL below.
3. Then, in your chosen code editor, change the current working directory to the location you would like the cloned repository to be located.
4. In the terminal, type 'git clone' and paste the URL that you copied earlier, and then press enter.

## Testing

Testing was conducted continuously throughout the entire project development process. Google Developer Tools and [JSHint](https://jshint.com/) were utilized to identify errors and troubleshoot any issues that arose during development.

Automated testing helps catch problems quickly and saves time by letting the computer do repetitive tasks instead of the developer. For example, if a change is made to a project, automated testing can be used to check to make sure that everything is working as it should be and all code is free from errors.

Automated testing;
- Saves time.
- Is reliable.
- Always gives an accurate result.
- Works for both small and large projects.
- Can isolate any errors to help identify where a problem is occurring.

### Code Validation

#### HTML Validation

[W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML. No errors were found.

[Page Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcollingsandrew.github.io%2Fmilestone-two-project%2Findex.html)

#### CSS Validation

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate the CSS. No errors were found.

[Page Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcollingsandrew.github.io%2Fmilestone-two-project%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### JavaScript Validation

[JSHint](https://jshint.com/) was used to validate the Javascript files. No issues were found. One undefined variable found in sendEmail.js, this is code used for the emailjs API which is initialized within the index.html head tag.

<details>
<summary>script.js</summary>
<img src="./assets/readme/testing/js-hint-script.png">
</details>
<details>
<summary>sendEmail.js</summary>
<img src="./assets/readme/testing/js-hint-email.png">
</details>

### Accessibility Testing

[WAVE Web Accessibility Tool](https://wave.webaim.org/) was used to test for accessibility errors. The page passed with no errors and no contrast errors.

[Page Results](https://wave.webaim.org/report#/https://collingsandrew.github.io/milestone-two-project/index.html)

### Lighthouse Testing

Google Lighthouse was used to test the page. The page performed well.

<details>
<summary>Mobile</summary>
<img src="./assets/readme/testing/mobile-lighthouse.png">
</details>
<details>
<summary>Desktop</summary>
<img src="./assets/readme/testing/desktop-lighthouse.png">
</details>

### Devices

Google Developer Tools was used to test the site on various device sizes.

The following devices were used to test the site:
- 32" (3840 x 2160) Desktop Monitor
- 15.6" (1920 x 1080) ASUS Laptop
- iPad Tablet
- Samsung S23 Mobile
- iPhone 12 Mobile

### Browsers

The following browsers were used to test the site:
- Google Chrome
- Mozilla Firefox
- Safari