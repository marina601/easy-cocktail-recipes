# Easy Cocktail Recipes - Testing details

[Main README.md file](/README.md)

[View website in GitHub Pages](https://marina601.github.io/easy-cocktail-recipes/)

[**Testing**](#testing)
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

## Testing

- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
- I have also used JSHints for JavaScript and jQuery code.

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
  -- The file passed with no major issues, the only issue was resolved was regarding transition value.

- [W3C Markup Validation]( https://validator.w3.org/)
   -- HTML code pass validation without major errors, type attribute has been removed from all <script> elements.
    
- [JSHints](https://jshint.com/)
   -- Recipes Page has presented the only error where some missing semicolons had to be added 

### User stories testing:

### Testing user stories from UX section of README.md

### First Time User:

1. As a first-time user, I want to understand what this site is about and what to expect.
  - On landing of the home page the user is greeted with a hero image of the barman making cocktails
  - The user is greeted with a heading on top of the page which clearly defines the subject of the website
  - The user is greeted with a quote on the right hand side of the page defining the theme of the website.
  - The user is presented with a clear navigation which tells the user what pages the user can access.
  - The navigation is responsive on mobile devices. 
  - The navigation is sticky throughout the site giving the user accessability to access any page at any given time.
  - The user is greeted with three call to action messages: 
     -- 1st - Greeting message 
     -- 2nd - What tools the user will need to execute the recipes 
     -- 3rd - Call to action point tells the user what to do when they go to the recipe page 

2. As a first-time user, I want to view a selection of cocktail recipes available.
  - When the user is landing on the recipe page the user is presented with all the cocktail recipes in the collapse view. 

3. As a first-time user, I want to be able to see the ingredients and method for each cocktail.
  - The user can view the recipes by clicking on the recipe name.
  - Once the recipe card is open the it displays the ingredients, method, category and possibility to rate the recipe.
  - Once the user leaves the recipe card, it collapses. Letting the user move on to the different recipe. 
   
4. As a first-time user, I want to check out the social media links of the blog.
  - Socila links are available in the footer of the page, which is consitant throughout the site.
  - The user is able to click on the social icons in the footer, the new page will open, given the user an easy access 
  to go back to the site. 

### Returning user:

1. As a returning user, I want to make a cocktail and follow the instructions.
   - As a returning user, the user is familiar with the layout of the site and can easily navigate to the recipe page.
   - A returning user is able to click on the desired recipe and open the instructions.
   - A returning user can click through recipe cards and check out all the ingredients and methods.

2. As a returning user, I want to be able to rate the recipes.
   - As returning user, is able to rate the recipe in the bottom of the recipe card by clicking on the star rating.
   - The user will be given feedback with an alert displaying at the top of the page to thank them for rating the recipe. 

3. As a returning user, I want to learn more about the blog.
   - The returning user can access the about page by clicking on the sticky navigation menu.
   - The user will presented with a short about section which tells them how and why the blog was created. 
   - The user is presented with the images and names of the blog creators.
   
4. As a returning user, I want to learn more about the blog creator and check out their social media accounts.
   - To learn more about the creators of the blog the user is able to click on the image or the name of the blog creators.
   - The bio information will be displayed telling the user where they use to work with links directing the user to the 
      places where the each individual use to work opening in the separate tab.
   - The user will be presented with individual hobbies.
   - The user can check out individual social media accounts (Pintrest, Instagram and LinkIn).
   - The user can close the information simply by clicking on the button at the bottom of the bio information. 



### Frequent user:
1. As a frequent-user, I want to be able to contact the blog creators and ask a question.
2. As a frequent-user, I want to follow the blog on social media.

### Business Goals:

1. As a business owner, I want to build an interactive website for viewers to explore popular recipes.
2. As a business owner, I want to increase the site traffic and get more views.
3. As a business owner, I want to build my social network following.
3. As a business owner, I want to interact with users on a personal level.