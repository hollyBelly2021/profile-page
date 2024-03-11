# Maea's Profile Page

This is a simple profile page about me.

## MUST READ

I did this project so I could practice HTML5, CSS, Flexbox, color theory.

##

### Built with:

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned:

03/09/24:

- ```css
  .container-header {
    height: 100vh;
    background-color: #607274;
    display: flex;
    justify-content: center;
  }
  ```

  - Using `height: 100vh` for using the whole window - any desktop sizes.

- ```css
  .about-description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    flex-basis: 200px;
    margin: 0px 50px 50px 50px;

    gap: 10px;

    font-weight: 300;
  }
  ```

  - `flex-basis` acts as a height when the flex-direction is set to column.

- ```html
  <img class="profile-image-styles" src="./assets/profile.png" alt="" />
  ```
  - using CANVA

03/10/24:

- ```css
  .logo-maea,
  .profile-image-styles,
  .logo-styles {
    max-width: 100%;
    height: auto;
  }
  ```
  - To make an image responsive regardless of the window size,
    - `max-width: 100%;` ensures that the image will never exceed the width of its container.
    - `height: auto;` maintains the aspect ratio of the image, so it will scale proportionally with the width.
- ```html
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    class="icons bi bi-facebook"
    viewBox="0 0 16 16"
  ></svg>
  ```
  - Adding Icons:
    - download the svg file from bootstrap to edit.
    - change height and width.
    - added a customize class to change the color.

03/11/24

- ```css
  .container-contacts h2 {
    /* margin-left: 50px; */
    text-align: center;
  }
  ```
  - I was having a hard time centering the text then I remember about `text-align: center`

### Updates:

03/10/24:

- Fixed bugs and I added a footer section for contacts
- Made the images responsive

03/11/24:

- Fixed minor bugs
- Finished contact section

### Future Update:

03/09/24:

- Project section
- Contact section
- Sticky Navbar

03/10/24:

- Continuation of contact section
- Sticky Navbar

03/11/24

- Sticky Navbar (will do this if I have a lot of project listed.)

## Author

- LinkedIn - [Maea Matugas](www.linkedin.com/in/maea-matugas)
- GitHub - [@hollyBelly2021](https://github.com/hollyBelly2021)
