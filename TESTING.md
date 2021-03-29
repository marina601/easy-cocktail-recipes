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

TESTING.md

- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
- I have also used JSHints for JavaScript and jQuery code.

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
  -- The file passed with no major issues, the only issue was resolved was regarding transition value.

- [W3C Markup Validation]( https://validator.w3.org/)
   -- HTML code pass validation without major errors, type attribute has been removed from all script elements.
    
- [JSHints](https://jshint.com/)
   -- Recipes Page has presented the only error where some missing semicolons had to be added 

### User stories testing:

### Testing user stories from UX section of README.md

### First Time User:

1. As a first-time user, I want to understand what this site is about and what to expect.
  - On landing of the home page the user is greeted with a hero image of the barman making cocktails
  - The user is greeted with a heading on top of the page which clearly defines the subject of the website
  - The user is greeted with a quote on the right hand side of the page defining the theme of the website.
  - The background image chosed for the site, was designed to give an impression to the use of entering in the 
  trendy bar, seeing the barman mixing drinks. With dark background and black and white image makes all other features 
  stand out. 
  - The user is presented with a clear navigation which tells the user what pages the user can access.
  - The navigation is responsive on mobile devices. 
  - The navigation is sticky throughout the site giving the user accessability to access any page at any given time.
  - The user is greeted with three call to action messages: 
     -- 1st - Greeting message 
     -- 2nd - What tools the user will need to execute the recipes 
     -- 3rd - Call to action point tells the user what to do when they go to the recipe page 

2. As a first-time user, I want to view a selection of cocktail recipes available.
  - When the user is landing on the recipe page the user is presented with all the cocktail recipes in the collapse view. 
  - Showing Recipe Image and Recipe Title.

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
- A frequent-user is able to to go to Contac page and submit any quesion or queries they might have by completeing 
information required in the form.
- Once the form has been submited the user will be presented with an alert to let them know the message has been sent. 
- The user will also recieve an automated reply straight in their inbox telling them the message has been recieved and 
somebody from the team will be in touch with them shortly.

2. As a frequent-user, I want to follow the blog on social media.
- Socila Icons are presented at the bottom of each page which lead to the different social media accounts of the blog. 

### Note: 
Going through the use stories I have realized the user journey throughout the site is not clearly marked out. Therefore, 
I have added call to action buttons on every page providing a user with a clear direction what the next step should be. 
The website has a natural flow now taking the user from the HOME page > RECIPE page > ABOUT page > CONTACT page. 

The user can choose two options navigating the website either by following call to action buttons or by choosing their desired 
page from the sticky menu.

### Business Goals:

1. As a business owner, I want to build an interactive website for viewers to explore popular recipes.
- The website has been designed with user experience in mind.
- The website has a responsive design on all devices. 
- The website has clear call to action buttons at the bottom of each page to lead the user through 
the journey.
- The website has easy to access navigation bar, which is displayed with site logo and collapse navigation links 
on the mobile devices and expand view on the medium and large screen views. 

3. As a business owner, I want to build my social network following.
-The website contain social media buttons at the bottom of each page which user can click and follow the blog.

3. As a business owner, I want to interact with users on a personal level.
- The website provides feedback to the user on interaction: 
   - Recipe rating provides feedback 
   - Contact form provides feedback on submit using users name in the alert from the input box. 
   - When the user recieves automated reply it includes users name to create a personal touch. 
   - User is presented with overview information in the recipe page and about page, if the user decides to 
   explore the information further, further information is presented at the click of the button. 
- The website has a custom 404 page which leads the users to home page on click of the button.

### Manual (logical) testing of all elements and functionality on every page.

#### Home Page:

1. Navigation bar:
    1. Starting at the "Home" page from the desktop. 
    2. Changed the screen size from desktop to tablet - the navigation did not collapse as expected on the tablet view.
    3. Hover over the links which change the font color and background color.
    3. Changed the screen size to the mobile view - the burger button has appeared and the navigation bar did collapse. 
    4. When pressing on the burger icon the menu drops down. 
    5. When pressing on the links the background color and font color change to tell the user they have clicked on the link. 
    6. When pressing on the burger icon and the menu is at he expand view the menu collapses. 
    7. Go to the bottom of the page to make sure the navigation bar is sticky.
    8. When clicking on all the links they do lead to the correct pages. 
    9. Repeted the verification of functionality and responsiveness using Google Crome and Edge browsers. 
    10. Flip the tablet and mobile devices to check responsiveness.
    
 ![Tablet-view](/assets/wireframes/tablet-navigation.png)
 ![Desktop-view-hover](/assets/wireframes/desktop-nav-hover.png)
 ![Mobile-viw](/assets/wireframes/mobile-navigation.png) |![Mobile-nav-collapses](/assets/wireframes/Mobile-nav-collapse.png) | ![Mobile-nav-click](/assets/wireframes/mobile-view-onclick.png)

2. Quote 
   1. Starting from the desktop view the quote has bootstrap margin to the right. Featuring the barman in the background image. 
   2. View the page in the tablet view the quote still has a margin to the right but now appears at the top of the page, still featuring a 
   background image of the barman at the bottom. 
   3. Chance the screen size to mobile view, the quote appears on the top of the page after the navliks. 
   The quote is full width with a border around. The barman appears below the quote.
   4. Repeted the verification of functionality and responsiveness using Google Crome and Edge browsers.  

3. Call-out 
    1. Starting from the desktop view three call out section are displayed in line. 
    2. Reducing the size to tablet view there is only 2 call-outs displayed inline and the third 
    is wraped under the the first two call-outs and displayed in the middle. 
    3. Reducing the size of the screen to mobile view: all call outs take full width of the screen and displayed in individual 
    column.
    4. Repeted the verification of functionality and responsiveness using Google Crome and Edge browsers. 

 
4. Call-to-action-button 
     1. Clicking on the call to action button to check the link which is linked to recipe.html page. 
     2. Once the button is hovered the background color and font color changes.
     3. Shadow property has been used on call to action button to make it stand out and catch the 
     attention of the user.


[Add some images here ]

5. Footer 
    1. Hover over each social media icon and confirm colour and size transitions expected. 
    2. Click on each icon to confirm it opens a separate tab for it's link.
    3. Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths.

 ## Bugs 

 ### Navigation 

-- When flipping the mobile phone device found that header height was expanding over the navigation bar. 
-- Fix the height of the header with responsive 10vh height to avoid this issue and overflow. 