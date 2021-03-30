# Easy Cocktail Recipes - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://marina601.github.io/easy-cocktail-recipes/)

# Table of Content

[**Testing**](#testing)
   - [**Validation Results**](#validation-results)
   - [**Testing User Stories**](#user-stories-testing)
   - [**Further Testing**](#further-testing)
      - [**Device Compatibility Table**](#device-compatibility-table)
      - [**Home Page**](#home-page)
      - [**Recipe Page**](#recipe-page)
      - [**About Page**](#about-page)
      - [**Contact Page**](#contact-page)
      - [**Custom 404 Page**](#404.html-page)
   - [**Google Lighthouse Testing**](#google-lighthouse-testing)
   - [**Cross Browser Compatibility Table**](#cross-browser-compatibility-table)
   - [**Bugs**](#bugs)

## Validation Results

- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
- I have also used JSHints for JavaScript and jQuery code.

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
  -- The file passed with no major issues, the only issue that was resolved was regarding transition value.

- [W3C Markup Validation]( https://validator.w3.org/)
   -- HTML code pass validation without major errors, type attribute has been removed from all script elements.
    
- [JSHints](https://jshint.com/)
   -- Recipes Page has presented the only error where some missing semicolons had to be added 

##### back to [content](#table-of-content)

## User stories testing

### Note: 
Going through the user stories I have realized the user journey throughout the site is not marked out. Therefore, 
I have added a call to action button on every page providing a user with a clear direction on what the next step should be. 
The website has a natural flow now taking the user from the HOME page > RECIPE page > ABOUT page > CONTACT page. 

The user can choose two options navigating the website either by following call to action buttons or by choosing their desired 
page from the sticky menu.

### Testing user stories from UX section of README.md

### First Time User:

1. As a first-time user, I want to understand what this site is about and what to expect.
  - On the landing of the home page the user is greeted with a hero image of the barman making cocktails
  - The user is greeted with a heading on top of the page which clearly defines the subject of the website
  - The user is greeted with a quote on the right-hand side of the page defining the theme of the website.
  - The background image chosen for the site, was designed to give an impression to the use of entering trendy bar,
   seeing the barman mixing drinks. A dark background and black and white image makes all other features 
  stand out. 
  - The user is presented with clear navigation which tells the user what pages the user can access.
  - The navigation is responsive on mobile devices. 
  - The navigation is sticky throughout the site giving the user accessibility to access any page at any given time.
  - The user is greeted with three call-out messages: 
     -- 1st - Greeting message 
     -- 2nd - What tools the user will need to execute the recipes 
     -- 3rd - Call to action point tells the user what to do when they go to the recipe page 
  - The user is guided to the next page via a call to action button in the third call out or the user can 
  simply choose which page to view via the navigation bar.

2. As a first-time user, I want to view a selection of cocktail recipes available.
  - When the user is landing on the recipe page the user is presented with all the cocktail recipes in the collapsed view. 
  - Showing Recipe Image and Recipe Title.
  - Call to action button is located at the bottom of the page leading the user to learn more about the blog creators.

3. As a first-time user, I want to be able to see the ingredients and method for each cocktail.
  - The user can view the recipes by clicking on the recipe name.
  - Once the recipe card is open it displays the ingredients, method, category, and possibility to rate the recipe.
  - Once the user leaves the recipe card, it collapses. Letting the user move on to the different recipe. 
   
4. As a first-time user, I want to check out the social media links of the blog.
  - Social links are available in the footer of the page, which is consistent throughout the site.
  - The user can click on the social icons in the footer, the new page will open, given the user easy access to 
 go back to the site. 

### Returning user:

1. As a returning user, I want to make a cocktail and follow the instructions.
   - As a returning user, the user is familiar with the layout of the site and can easily navigate to the recipe page.
   - A returning user can click on the desired recipe and open the instructions.
   - A returning user can click through recipe cards and check out all the ingredients and methods.

2. As a returning user, I want to be able to rate the recipes.
   - As returning user, can rate the recipe at the bottom of the recipe card by clicking on the star rating.
   - The user will be given feedback with an alert displaying at the top of the page to thank them for rating the recipe. 

3. As a returning user, I want to learn more about the blog.
   - The returning user can access the about page by clicking on the sticky navigation menu or call to action 
   button at the bottom of the recipe page.
   - At the bottom of the About page the user can see a call to action button to submit a contact form.
   - The user is presented with a short about section which tells them how and why the blog was created. 
   - The user is presented with the images and names of the blog creators.
   
   
4. As a returning user, I want to learn more about the blog creator and check out their social media accounts.
   - To learn more about the creators of the blog the user can click on the image or the name of the blog creators.
   - The bio-information is displayed telling the user where they use to work with links directing the user to the 
      places where each person use to work opening in the separate tab.
   - The user is presented with individual hobbies.
   - The user can check out individual social media accounts (Pinterest, Instagram and LinkedIn).
   - The user can close the information simply by clicking on the button at the bottom of the bio information. 


### Frequent user:
1. As a frequent-user, I want to be able to contact the blog creators and ask a question.
- A frequent-user can go to the Contac page and submit any questions or queries they might have by completing 
information required in the form.
- Once the form has been submitted the user will be presented with an alert to let them know the message has been sent. 
- The user will also receive an automated reply straight in their inbox telling them the message has been received and 
somebody from the team will be in touch with them shortly.

2. As a frequent-user, I want to follow the blog on social media.
- Social Icons are presented at the bottom of each page which leads to the different social media accounts of the blog. 



### Business Goals:

1. As a business owner, I want to build an interactive website for viewers to explore popular recipes.
- The website has been designed with user experience in mind.
- The website has a responsive design on all devices. 
- The website has clear call-to-action buttons at the bottom of each page to lead the user through the journey.
- The website has easy to access navigation bar, which is displayed with the site logo and collapses navigation links on
 mobile devices, and expands the view on the medium and large screen views. 

3. As a business owner, I want to build my social network following.
-The website contains social media buttons at the bottom of each page which users can click and follow the blog.

3. As a business owner, I want to interact with users on a personal level.
- The website provides feedback to the user on interaction: 
   - Recipe rating provides feedback 
   - Contact form provides feedback on submit using the user's name in the alert from the input box. 
   - When the user receives an automated reply it includes ther user's name to create a personal touch. 
   - User is presented with overview information on the recipe page and about page if the user decides to 
   explore the information further, further information is presented at the click of the button. 
- The website has a custom 404 page which leads the users to the home page with a click of the button.

##### back to [content](#table-of-content)

## Further Testing

### Manual (logical) testing of all elements and functionality on every page.

### Device compatibility table


| Pages    |<strong>Laptop</strong>|<strong>Ipad</strong>|<strong>IphoneX</strong> | <strong>Nokia</strong> |
|----------|:---------------------:|--------------------:|------------------------:|-----------------------:|
| Home     |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|<input type="checkbox" checked />|
| Recipe   |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|<input type="checkbox" checked />|       
| About    |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|<input type="checkbox" checked />|
| Contact  |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|<input type="checkbox" checked />|
    
##### back to [content](#table-of-content)

### Home Page

1. Navigation bar:
    1. Starting at the "Home" page from the desktop. 
    2. Changed the screen size from desktop to tablet - the navigation did not collapse as expected on the tablet view.
    3. Hover over the links which change the font color and background color.
    3. Changed the screen size to the mobile view - the burger button has appeared and the navigation bar did collapse. 
    4. When pressing on the burger icon the menu drops down. 
    5. When pressing on the links the background color and font color change to tell the user they have clicked on the link. 
    6. When pressing on the burger icon and the menu is at the expanded view the menu collapses. 
    7. Go to the bottom of the page to make sure the navigation bar is sticky.
    8. When clicking on all the links they do lead to the correct pages. 
    9. Repeated the verification of functionality and responsiveness using Google Chrome and Edge browsers. 
    10. Flip the tablet and mobile devices to check responsiveness.
    
 ![Tablet-view](/assets/wireframes/tablet-navigation.png)
 ![Desktop-view-hover](/assets/wireframes/desktop-nav-hover.png)
 ![Mobile-viw](/assets/wireframes/mobile-navigation.png) |![Mobile-nav-collapses](/assets/wireframes/Mobile-nav-collapse.png) | ![Mobile-nav-click](/assets/wireframes/mobile-view-onclick.png)

2. Quote 
   1. Starting from the desktop view the quote has a Bootstrap margin to the right. Featuring the barman in the background image. 
   2. View the page in the tablet view the quote still has a margin to the right but now appears at the top of the page, still featuring a 
   background image of the barman at the bottom. 
   3. Chance the screen size to mobile view, the quote appears on the top of the page after the nav liks. 
   The quote is full width with a border around it. The barman appears below the quote.
   4. Repeated the verification of functionality and responsiveness using Google Chrome and Edge browsers.  

3. Call-out 
    1. Starting from the desktop view three call-out section are displayed inline. 
    2. Reducing the size to tablet view there is only 2 call-outs displayed inline and the third 
    is wrapped under the first two call-outs and displayed in the middle. 
    3. Reducing the size of the screen to mobile view: all call outs take the full width of the screen and displayed in individual 
    column.
    4. Repeated the verification of functionality and responsiveness using Google Chrome and Edge browsers. 

 
4. Call-to-action-button 
     1. Clicking on the call to action button to check the link which is linked to the recipe.html page. 
     2. Once the button has hovered the background color and font color changes.
     3. Shadow property has been used on the call to action button to make it stand out and catch the
     attention of the user.


![Tablet Call Outs](/assets/wireframes/tablet-call-outs.png)

5. Footer 
    1. Hovered over each social media icon, which showed good transitions and a change of background colour.
    2. Click on each icon, each link leads to a separate tab.
    3. The footer is responsive on all window view sizes.

##### back to [content](#table-of-content)

### Recipe Page 

1. Navigation bar: 
    1. Repeated verification steps done for navbar on the Home page.
    2. Navbar code is identical on all HTML pages.

2. Recipe Cards: 
    1. Starting with a desktop view, the cocktail recipes are displayed with 3 cocktails in each row, in the collapsed view. 
    2. The only information displayed on the landing page is images of the cocktails and their name. 
    3. Hover over the name of the cocktail and the pointer is displayed showing the user to click on the name. 
    4. Once the user clicks on the recipe title, the ingredients, method, category of each recipe are displayed. 
    5. At the bottom of the recipe card the user is asked to rate the recipe with an empty star rating. 
    6. Hover over the stars and the colour of the stars is changing colour. 
    7. Once the user clicks on the star, all previous stars change color to orange and all the next stars change color to black to show 
    the empty stars which have not been rated. 
    8. If the user changes its mind and rates the same recipe again, the stars change colour as expected. 
    9. Once the recipe has been rated the alert is displayed with the following message "Thank you for rating this recipe".
    10. On mouse leave the recipe collapses to its original view. 
    12. Reduce the screen size to tablet view, the recipe cards displayed in the collapsed view, 2 recipe cards in the row. 
    13. Steps 2-9 have been repeated and the results were satisfactory and the same as desktop view. 
    14. When the user opens another recipe card the previous one closes so the viewer can view one recipe card at a time. 
    15. The user is also able to click on the recipe card to collapse the view 
    16. Reduce the screen view to mobile size, the recipe cards displayed in the collapsed view, 1 recipe card in a row. 
    17. Steps 2-9 have been repeated and provided the same results as the desktop. 
    18. When the user opens another recipe card the previous one closes so the viewer can view one recipe card at a time.
    19. The user is also able to click on the recipe card to collapse the view 

![Recipe-mobile](/assets/wireframes/recipe-expanded.png) | ![Recipe-feedback](/assets/wireframes/rating-feedback.jpg)

![Recipe Tablet Layout](/assets/wireframes/recipe-ipad-view.png)
![Recipe Expanded at Tablet View](/assets/wireframes/Recipe-tablet-view.png)    

3. Call to action button
    1. Clicking on the call to action button to check the link which is linked to the about.html page. 
    2. Once the button is has hovered the background color and font color changes.
    3. Shadow property has been used on the call to action button to make it stand out and catch the 
    attention of the user.
    4. Repeated the same steps on a tablet, mobile, and desktop devices with satisfactory results.

4. Footer 
    1. Hovered over each social media icon, which showed good transitions and a change of background colour.
    2. Click on each icon, each link leads to a separate tab.
    3. The footer is responsive on all window view sizes.
    4. The footer code is identical on all HTML pages.

##### back to [content](#table-of-content)

### About Page 

1. Navigation bar: 
    1. Repeated verification steps done for navbar on the Home page.
    2. Navbar code is identical on all HTML pages.

2. About the intro section 
    1. Starting at the desktop view a full-width section appears on loading of the page.
    2. Reduce the screen size to the tablet view, the responsive design works without overlapping the width of the screen. 
    3. The section is written in a clear and easy-to-read way and stands out from the background. 
    4. Reduce the screen size to the mobile view, as expected, the section is responsive.
    5. Repeated the verification of functionality and responsiveness using Google Chrome and Edge browsers. 

![About Page Tablet View](/assets/wireframes/bio-page.png) | ![About Page Tablet View](/assets/wireframes/bio-page-footer.png)
![About Page](/assets/wireframes/about-page.png)

3. Individual Bios 
    1. Starting at the desktop view, 2 columns appear side by side in the collapsed view with only pictures and names of the site owners.
    2. Hover over each picture to check the alt information is appearing, all responded well for each image.
    3. Reduce the screen view to tablet view, the bio divs still displayed next to each other as planned. 
    4. Reduce the screen view to mobile size, each bio div is displayed in a single column one on top of each other. 

4. Olivia Newman 
    1. Click on the image of Olivia and only her bio expands. 
    2. Click on the name Olivia Newman and only her bio expands. 
    3. Hover over the links to the places where she used to work, the background, and font color changes. 
    4. Click on each link to verify the links lead to external pages. 
    5. Hover over the social icons, all of the icons changed color on hover. 
    6. Click on each icon to ensure the links open in external tabs, all working and linking well. 
    7. Hover over the button at the end of the bio, the button changed the background colour. 
    8. Click on the button and the div has collapsed, the information slides up quickly. 
    9. Follow the steps from 1-8 on the tablet and mobile devices.
    10. Repeated the verification of functionality and responsiveness using Google Chrome and Edge browsers.

5. Martin Huntsman
    1. Click on the image of Martin and only his bio expands. 
    2. Click on the name Martin Huntsman and only his bio expands. 
    3. Hover over the links to the places where he used to work, the background, and font color changes. 
    4. Click on each link to verify the links lead to external pages. 
    5. Hover over the social icons, all of the icons changed color on hover. 
    6. Click on each icon to ensure the links open in external tabs, all working and linking well. 
    7. Hover over the button at the end of the bio, the button changed the background colour. 
    8. Click on the button and the div has collapsed, the information slides up quickly. 
    9. Follow the steps from 1-8 on the tablet and mobile devices.
    10. Repetead the verification of functionality and responsiveness using Google Chrome and Edge browsers.

6. Call to action button 
    1. Repeated verification steps are done for the call to action button on the Home page.
    2. The link leads to the contact.html page.

7. Footer 
    1. Hovered over each social media icon, which showed good transitions and a change of background colour.
    2. Click on each icon, each link leads to a separate tab.
    3. The footer is responsive on all widow view sizes.
    4. The footer code is identical on every page.
    
![About page-mobile](/assets/wireframes/about-page-mobile-footer.png) | ![About page](/assets/wireframes/about-page-mobile.png)

##### back to [content](#table-of-content)

#### Contact Page 

1. Navigation bar: 
    1. Repeated verification steps done for navbar on the Home page.
    2. Navbar code is identical on all HTML pages.

2. Introduction: 
    1. Start on the desktop view. 
    2. A single row is presented to the user explaining why they might want to get in touch. 
    3. Resize the screen to the tablet view. 
    4. As above a single row is presented to the user, which is responsive on all devices. 
    5. Resize the screen to the mobile view, as expected the introductory section is still responsive and does not overflow.

3. Contact Form 
    1. Start at the desktop screen view. 
    2. All the inputs are clearly labeled and asking the user to provide relevant information. 
    3. Tried to submit an empty form, the message popped up asking to enter the name. 
    4. Entered the name and tried to submit the form, a message popped up asking to fill in the empty field. 
    5. Entered the name and email address, tried to submit the form again. The message popped up asking to fill 
    in the empty field for textera element. 
    6. Filled in all the required information and pressed submit. 
    7. The Submit button changed the text to "Submitting...". 
    8. An alert popped up displaying the following message "Thank you [user-name]. Your message has been sent! We will be in touch soon!"
    9. Within seconds, the owner received an email notifying them of the site of the enquire, with a user name and email address, also with the text which 
    was entered. 
    10. Once pressed "OK" on alert, the form has been reset.
    11. The user gets an automated email ensuring them the message has been received and somebody will be in touch with them shortly.
    12. If the email address is not valid, the owner gets notified and emailJS is trying to resend the automated reply for 24hrs. 
    13. If something should go wrong with emailJS the user will be notified via an alert. 
    14. Repeated the same steps for tablet and mobile view, the result was satisfactory. 
    
![Contact Form Ipad](/assets/wireframes/contact-form-ipad.png)
![Contact Form Mobile](/assets/wireframes/contact-form-mobile.png)


4. Submit Button: 
    1. Start at the desktop view, and hover over the button which changed background color and font colour.
    2. Pressing submit when all the information required is filled in, the button changes the background colour, 
    font colour and the text element displayed "Sending..."
    3. Once the form has been reset the button went back to its original view. 
    4. Repeated the same steps for tablet and mobile view, the result was satisfactory. 

![Images of the submit button](/assets/wireframes/contact-form-sending.png)


5.Footer: 
    1. Hovered over each social media icon, which showed good transitions and a change of background colour.
    2. Click on each icon, each link leads to a separate tab.
    3. The footer is responsive on all widow view sizes.
    4. The footer code is identical on every page.
    
##### back to [content](#table-of-content)

### 404.html Page

1. Starting at the desktop view, typed some random characters after the URL and custom 404 page is displayed.
2. Hover over the button which leads to the home page and color has changed. 
3. Clicked on the button and the link has diverted the user to the home page. 
4. Repeated the following steps for tablet and mobile view. 
5. The result was satisfactory across the different size devices and browsers. 

![Responsive 404.html](/assets/wireframes/404.html-responsive.png)

##### back to [content](#table-of-content)

## Google Lighthouse Testing

- To get an accurate report all the pages have been viewed using an incognito window.

### Home Page: 
 
-- Remove all extra code from the external libraries to increase performance.

![Home Page Lighthouse Report](/assets/wireframes/home-lighthouse-report.jpg)

### Recipe Page: 

-- Added image fluid class to reduce the image size 
-- Generally, the performance issues found due to the large amount of data imported from the API 

![Recipe Page Lighthouse Report](/assets/wireframes/recipe-page-lighthouse.png)

### About Page:

-- Fix the rel attributes instead of rel="external" used rel="noreferrer".
-- Minimized the links to external resources like bootstrap and jquery library to improve performance.

![About Page Lighthouse Report](/assets/wireframes/about-lighthouse-report.png)

### Contact Page: 

-- Minimized the links to external resources like bootstrap and jquery library to improve performance.

![Contac Page Lighthouse Report](/assets/wireframes/contact-page-lighthouse.jpg)

### Cross Browser Compatibility Table 

| Pages    | <strong>Google Chrome</strong>   |       <strong>Edge</strong>     |     <strong>ISO</strong>        |
|----------|:--------------------------------:|--------------------------------:|--------------------------------:|
| Home     |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|
| Recipe   |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|      
| About    |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|
| Contact  |<input type="checkbox" checked /> |<input type="checkbox" checked />|<input type="checkbox" checked />|

- Browser compatibility test has been successful and all browsers tested displayed the information correctly.

 ## Bugs 

 ### Navigation:

-- When flipping the mobile phone device found that header height was expanding over the navigation bar. 
-- Fix the height of the header with responsive 10vh height to avoid this issue and overflow. 



### Recipe Page:

-- I came across a recipe rating bug, which was rating either all the recipe cards on click. 
- Solved it by looping over the stars and using prev and the next jQuery method to target is siblings. 



### About Page:

-- Each bio div has been set initially to expand only by a click of the image, however taking the into consideration UX design, 
the title of each div has been added to click funct to expand on click as well. Therefore, no matter the preference of the user which elements they 
would prefer to click, the div will expand.
-- During the testing, the images were distorted, used an online tool to resize the images to an equal size. 
-- The bio divs sometimes display a bug, when clicking on the Olivia both divs will expand, and no information 
displayed on Martin's bio div.
-- However, when pressing on the Martin divs only his information will be displayed as desired. 
-- Clicking on Olivia's div again after closing Martin's div only Olivia div is displayed. 

#### Lighthouse report 

-- Fix the rel attributes instead of rel="external" used rel="noreferrer".
-- Minimized the links to external resources like bootstrap and jquery library to improve performance.

![About Page Lighthouse Report](/assets/wireframes/about-lighthouse-report.png)

### Contact Page: 

-- Initially, the form has was not resetting on submit, therefore had to add reset functionality in the 
js file. 

-- I ensured all the input fields were field in using HTML5 required attribute. 

### 404 Page:

-- Whilst, testing the page on the mobile view, the button which led to the home page was overflowing the footer, fixed the 
height of the page using hv value. 


##### back to [content](#table-of-content)