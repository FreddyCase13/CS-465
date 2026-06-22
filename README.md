# CS-465
**Travlr Getaways: Full Stack Web Application**

A MEAN stack application for travel booking. This project pairs a customer facing website with an administrator single-page application, with both sharing a MongoDB database through a RESTful API.

**Archetecture:**

Front End Approaches: This project featured two types of frontend development. One is the customer facing site, and the other is the single page administrator site. The customer facing site is rendered through a server via Express. Express uses Handlebars templates to pull trip data from MongoDB, then ships HTML to the browser. The admin site is build in Angular, which loads once in the browser and renders everything on the client side using components. The difference between these two sites is how the page gets built. Express builds the page on the server and sends a full page to the browser, while the Angular SPA builds the page in the browser and moves data back and forth between the browser and the database. SPA's advantage is that it updates the view instantly when data changes but is much harder to debug because a single error in the code renders a white screen instead of a server error.

Why MongoDB: The backend uses MongoDB because the trip data is in JSON format. MongoDB stores the JSON data so that Angular and Express can both use the trip data. A SQL database would need the data to be split across tables and reassembeled with every request.

**Functionality:**

JSON vs Javascript: Javascript is a programming language that runs logic through a syntax. JSON is a structured data file that holds data but cannot run on its own. JSON ties in both the frontend and backend development pieces because it is structured so that javascript in one system can communicate with another system. This is how the Angular frontend and the Express backend can communicate via the RESTful API.

Refactoring and reusable components: There were multiple times I refractord code to improve efficiencies and funcitonalities. One example was writing the the trip-card component. The rendering logic for a single trip started inside trip-listing, but pulling the logic into its own trip-card component allowed that piece to handle displaying a trip and can now be displayed anywhere. ANother example of refactoring code is changing the login and register logic into a shared handleAuthAPICall helper. This allowed me to write and test the HTTP call once instead of duplicating it. The benefit of reusable UI components is modularity where one fix or change to the code applies everywhere the component is used. This keeps the codebase smaller and easier to maintain.

**Testing:**

**Reflection:**

