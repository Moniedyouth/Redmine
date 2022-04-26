# Test Step-platform by Cypress

Using Step-platform local host we should test all navbar buttons on main page. So we need click every navbar link (Plans, Keywords, Parameters, etc.) and make sure that the tab is loaded (lookup for an element on the page).

  ______
  ## To run the project:
  1. First of all we need follow documentation to install the Open-Source version of our step application on-premise on your laptop (https://step.exense.ch/knowledgebase/3.18/getting-started/quick-setup/) and start it.
  2. Install Cypress via npm:
          -  `cd /your/project/path`
          -  `npm install` 
      
  3. Input at the terminal at the `Cypress` folder `npm run cypress:open` and you can see all you `spec.js` tests and run them.
   ______
   ## Current project's dependecies
  At the `package.json`  should be 
  ```JavaScript
  "devDependencies": {
    "cypress": "^9.5.4"
  },
  ```
  ## Structure of current test-project
```
 📦cypress
 ┣ 📂integration
 ┃ ┗ 📜step.platform.test.spec.js
 ┣ 📂Pages
 ┃ ┣ 📜admin.page.js
 ┃ ┣ 📜executions.page.js
 ┃ ┣ 📜grid.page.js
 ┃ ┣ 📜keywords.page.js
 ┃ ┣ 📜login.page.js
 ┃ ┣ 📜parameters.page.js
 ┃ ┣ 📜plans.page.js
 ┃ ┗ 📜scheduler.page.js
 ```
 