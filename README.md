# CS-465
**Travlr Getaways: Full Stack Web Application**

A MEAN stack application for travel booking. This project pairs a customer facing website with an administrator single-page application, with both sharing a MongoDB database through a RESTful API.

**Architecture:**

Front End Approaches: This project featured two types of frontend development. One is the customer facing site, and the other is the single page administrator site. The customer facing site is rendered through a server via Express. Express uses Handlebars templates to pull trip data from MongoDB, then ships HTML to the browser. The admin site is built in Angular, which loads once in the browser and renders everything on the client side using components. The difference between these two sites is how the page gets built. Express builds the page on the server and sends a full page to the browser, while the Angular SPA builds the page in the browser and moves data back and forth between the browser and the database. SPAs advantage is that it updates the view instantly when data changes but is much harder to debug because a single error in the code renders a white screen instead of a server error.

Why MongoDB: The backend uses MongoDB because the trip data is in JSON format. MongoDB stores the JSON data so that Angular and Express can both use the trip data. A SQL database would need the data to be split across tables and reassembled with every request.

**Functionality:**

JSON vs Javascript: Javascript is a programming language that runs logic through a syntax. JSON is a structured data file that holds data but cannot run on its own. JSON ties in both the frontend and backend development pieces because it is structured so that javascript in one system can communicate with another system. This is how the Angular frontend and the Express backend can communicate via the RESTful API.

Refactoring and reusable components: There were multiple times I refactored code to improve efficiencies and functionalities. One example was writing the trip-card component. The rendering logic for a single trip started inside trip-listing, but pulling the logic into its own trip-card component allowed that piece to handle displaying a trip and can now be displayed anywhere. Another example of refactoring code is changing the login and register logic into a shared handleAuthAPICall helper. This allowed me to write and test the HTTP call once instead of duplicating it. The benefit of reusable UI components is modularity where one fix or change to the code applies everywhere the component is used. This keeps the codebase smaller and easier to maintain.

**Testing:**

When building a full stack application, you need different methods, endpoints, and security layers. Each one of these changes how you test an application. An HTTP method is a type of action a request performs on a resource, like GET, POST, PUT, and DELETE. a GET request allows you to retrieve data, a POST request allows you to input data, a PUT request allows you to update data, and a DELETE request removes data entirely. An endpoint is the URL that the method targets, like how /api/trips targeted the trip list or how /api/trips/:tripCode targets a single trip. I was able to test both of these methods and endpoints using Postman by sending each method to each endpoint and then checking responses after to see the status code.

Login security was also tested in Postman after implementing JWT authentication in both the POST and PUT routes. These endpoints didn't allow any requests to be made where there was no valid token. To test this, I first hit the login endpoint to get a fresh token, and then attached it as a bearer token on a protected request. Without the token, that request returned a 401. When adding the token, the request worked and gave a 200.

**Reflection:**

This course helped me get one step closer to obtaining a tech job through learning the process of building a full stack application. I learned what to expect as a frontend engineer, a backend engineer, and as a database engineer. Working through all three layers means that I am more prepared than I was before this class to work in those fields and will be able to communicate with teams about the workflows around the entire stack.

Some skills I gained in this course are to use tools like Postman to see how an application is supposed to work before the interface exists. I also learned that you can have a separate admin site that uses the same database and API as the core user site. I also learned to debug from the server instance on powershell and to debug from the syntax first since that is what can stop anything from rendering to the browser.
