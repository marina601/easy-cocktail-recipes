# Easy Cocktail Recipes 

![Easy Cocktail Recipes](/assets/images/responsive-design.png "Am I Responsive Image") 

[View the website on GitHub Pages](https://marina601.github.io/easy-cocktail-recipes)

I have created this site as part of my Milestone 2 project for Code Institute, 
focusing on Interactive Frontend Website development and design.

This blog is for adults, where they can browse through popular cocktail recipes and re-create them at home with minimal
effort. 
Due to the pandemic and the hospitality industry having one of the worst effects, people have missed going out and socializing. 
This website will enable adults to create simple cocktail recipes for special occasions or weekends for their friends and family to enjoy!

---

# Table of Content

1 [**UX**](#ux)
   - [**User Stories**](#user-stories)
   - [**UI Structure**](#ui-structure)
   - [**Design**](#design)
   - [**Wireframes**](#wireframes)

2 [**Features**](#features)

3 [**Technology Used**](#technology-used)
   - [**Languages Used**](#language-used)
   - [**Frameworks Libraries and Programs Used**](#frameworks-libraries-and-programs-used)
   - [**Logic Walkthrough**](#logic-walkthrough)
   - [**Problems During Development**](#problems-during-development)   

4 [**Testing**](#testing)
   - [**Testing User Stories**](#testing-user-stories)
   - [**Further Testing**](#further-testing)
      - [**Navigation Testing**](#navigation-testing)
      - [**Social Links**](#social-links)
      - [**Video**](#video)
      - [**Sign Up Form**](#sign-up-form)
      - [**Services**](#services)
      - [**Team**](#team)
      - [**Footer**](#footer)
   - [**Bugs**](#bugs)

5 [**Deployment**](#deployment)
  - [**GitHub Pages**](#github-pages)
  - [**Forking to GitHub Respiratories**](#forking-to-github-respiratories)
  - [**Making a local clone**](#making-a-local-clone)

6 [**Credits**](#credits)
 - [**Code**](#code)
 - [**Media**](#media)
 - [**Acknowledgment**](#acknowledgment)

## UX

Easy Cocktail Recipes is a blog where the user can browse through the selection of cocktails recipes. The user can choose to make the cocktails at home following instructions.

The main objective of this website is to provide the user with some of the most popular cocktail recipes, which are easy and quick to re-create at home.
Therefore, once the user selects their cocktail recipe, the instructions and method will be displayed.

The user can navigate back easily to the recipe page and browse through the cocktail selection.
The user can easily navigate to the About page, where they can learn more about a blog.
The user can contact the site owner by completing a contact form, once the form is submitted, they will receive a friendly email acknowledging their message.
The user can click on the social icons located at the bottom of the page and follow the blog on social media!

##### back to [content](#table-of-content)

## User Stories

The blog has been identified for users over 18 years old, who enjoy going out and drinking cocktails at the bar, following the pandemic, I wanted to give them the tools required to create a happy hour at home.

The following user stories have been identified:

### First Time User:

1. As a first-time user, I want to understand what this site is about and what to expect.
2. As a first-time user, I want to view a selection of cocktail recipes available.
3. As a first-time user, I want to be able to see the ingredieants and method for each cocktail.
4. As a first-time user, I want to check out the social media links of the blog.

### Returning user:

1. As a returning user, I want to make a cocktail and follow the instructions.
2. As a returning user, I want to navigate back to the recipe page for more cocktail recipes.
3. As a returning user, I want to learn more about the blog.
4. As a returning user, I want to learn more about the blog creater and check out their social media accounts.


### Frequent user:
1. As a frequent-user, I want to be able to contact the blog creators and ask a question.
2. As a frequent-user, I want to follow the blog on social media.

### Business Goals:

1. As a business-owner, I want to build an interactive website for viewers to explore popular recipes.
2. As a business-owner, I want to increase the site traffic and get more views.
3. As a business-owner, I want to build my social network following.
3. As a business-owner, I want to interact with users on a personal level.

##### back to [content](#table-of-content)

## UI Structure
 
Considering the above user stories, I have decided upon the following UI Structure and styling:

### Home Page: 

- A clear and simple landing page with a big hero image where the user will have a clear understanding of the website.
- A simple navigation menu will outline the content of the blog.
- Navigation is sticky throughout the site giving user an easy navigation options at any time.
- The user is presented with a famous quote by Luis Bunuel on loading of the page, which tells the user what this blog is about.
- Three call-out statements will are displayed to explain to the user what to expect from the blog.

### Recipe Page:

- Cocktail recipes displayed on the page.
- Once the user clicks on the name of the cocktail the information will expand.
- Once the user leaves a particular recipe, the information will collapse.
 
### About Page:

- A brief introduction about how the site has been created.
- Pictures of the two site owners are displayed with their names.
- Once the user clicks on the image or the name of the site owners more information is displayed, which includes their social media accounts.
- At the botton of the bio information there is a button and on click the information slides up.

### Contact Page:

- Contact form is available for users to submit their queries. 
- Once the contact form has been submitted, an aler will be displayed, thanking the user for getting in touch.
- An automated email will be sent to the user once the contact form has been submitted.

### Common:

-  Navigation menu will be sticky and  responsive.
-  Navigation will collapse on the mobile view 
-  Hero-background image will remain the same throughout all the pages, to give consistency to the design and cocktail-bar feel. 
-  The footer will be minimal with only social media icons to the blog.

##### back to [content](#table-of-content)


## Design

 ### Color Scheme 

![Color Palette](/assets/images/color-palette.jpg)
- #ffffff
- #d6css2
- #be6851
- #b00f16
- #0d0709

Sometimes the colours have been converted to the rgba values to create transparency.
Color palette has been picked from [colorpalettes.net](https://colorpalettes.net/color-palette-738/)
        

 ### Typography
      
 [Google Fonts](https://fonts.google.com/) have been used on this page 
        - To gie consistency to the users, consistant font have been used throughout he site:

        - All the headings are displayed in font-family:'Akaya Telivigala', cursive;
        - All other elements are displayed in font-family: 'Prata', serif;


### Imagery
        - All the imagery is imported from 
##### back to [content](#table-of-content)

## Wireframes

For wireframes I have used [Balsamiq](https://balsamiq.com/)

Please view my [Wireframes](https://browser-aquamarine-carp-v2i7swjo.ws-eu03.gitpod.io/workspace/easy-cocktail-recipes/assets/wireframes/easy-cocktail-recipe%28wireframes%29.pdf)


##### back to [content](#table-of-content)

## Features 

### Features implemented 

- Logo is linked to the home page.
- Dynamic navigation menu collapses on the mobile screen view.
- Three initial messages will show up to the user on a scroll.
- Recipe cards that get their input from an API.
- Star recipe rating records the total rating.
- Recipe card shows up as a main feature on the page once it is clicked on and the background fades.
- The user can exit the recipe card in 3 ways, clicking on the x button, clicking on the main window, or pressing the Escape key on the keyboard.
- The website has a responsive design based on the screen view.
- Contact form uses the “POST” method to send information from the user to the owner powered by JSmail API

### Features Left to Implements

- Subscription form to the blog
- Print Button to the recipe card

##### back to [content](#table-of-content)

## Technology Used

### Language Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

##### back to [content](#table-of-content)

### Frameworks Libraries and Programs Used 

1. [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
 - mainly for responsive grid system and used components to assist styling of the elements.
also used Java Script components for responsive navigation bar and toggler class to create a humburger button on the mobile device. 
Bootstrap css library has been used to help with additional styling on the webpage.


2. [CSS tricks](https://css-tricks.com/perfect-full-page-background-image/) 
- used to create a full background image which will be recognised by all 
browsers.

3. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Montseratt and Releway' fonts into the style.css file which is used on all pages throughout the project.

4. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

5. [jQuery](https://api.jquery.com/)    

6. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

7. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

8. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.

9. [TinyPng:](https://tinypng.com/)
   - TinyPng was used to compress the size of the images and improve loading time.

10. [TheCocktailDB](https://www.thecocktaildb.com/api.php)
   - API used to get cocktail recipes into recipe cards 

11. [Email-JS](https://www.emailjs.com/)
   - API used to submit contact form and send automated emails to the user.

12. [Grammarly](https://www.grammarly.com/)
    - Used to fix the thousands of grammar errors across the project.

13. [Gitpod](https://www.gitpod.io/)
    - Used as the development enviroment.

14. [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
    - Used as a primary method of fixing spacing issues, finding bugs, and testing responsiveness across the project

##### back to [content](#table-of-content)

## Logic Walkthrough

##### back to [content](#table-of-content)

## Problems During Development 

##### back to [content](#table-of-content)

## Testing

##### back to [content](#table-of-content)

## Deployment

## GitHub Pages

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/marina601/iFitness)
2. At the top of the Repository (not top of page), locate the "Settings" button on the menu.
    - Alternatively, click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "root" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://marina601.github.io/iFitness/) in the "GitHub Pages" section.

##### back to [content](#table-of-content)


### Forking to GitHub Respiratories

By forking the GitHub Repository we make a copy of the original repository on our GitHub 
account to view and/or make changes without affecting the original repository by using the following step:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/marina601/iFitness)
2. At the top of the Repository (not top of page) just above the "Settings" on the menu, locate the "Fork" button.
3. You should now have a copy of the original repository in your GitHub account.

##### back to [content](#table-of-content)

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/marina601/iFitness)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste the URL you copied in Step 3.

##### back to [content](#table-of-content)

## Credits

### Code

##### back to [content](#table-of-content)

### Media

##### back to [content](#table-of-content)
 
### Acknowledgment

##### back to [content](#table-of-content)
