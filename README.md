# Recipe App

A recipe application that retrieves data from the MealDB API to showcase recipes, allows users to search for recipes, view details, and add them to a cart. This project includes essential new features, bug fixes, and ensures a mobile-responsive, accessible design.

### Live Link

- [Recipe App Live Version](https://repliq-recipe-app.vercel.app)

### GitHub Repository

- [Recipe App GitHub Repository](https://github.com/badaruddinomar)

## Features Implemented

### 1. Basic Authentication

- **Technical**: Implemented an authentication system where users can sign up and log in using their name, email, phone number, and password. Managed user sessions to enable or restrict access to certain features based on authentication status.
- **Non-Technical**: Users can create an account and log in to the application. This allows them to have a personalized experience when browsing and adding recipes.

### 2. All Recipes Page

- **Technical**: Created a new page to fetch and display all recipes available from the MealDB API,
- **Non-Technical**: Users can now browse all available recipes in one place, with easy navigation options to explore a variety of meal ideas.

### 3. Add Recipe to Cart

- **Technical**: Implemented functionality to allow users to add recipes to a cart. The cart saves data locally for unauthenticated users using `localStorage`, while authenticated users' cart data is saved to their account in the backend.
- **Non-Technical**: Users can add recipes to their cart, creating a convenient list of recipes they are interested in preparing. Unauthenticated users still enjoy the functionality, while logged-in users'

# Bug Report for Repliq Practical Assessment

### Identified Bugs

1. **Error on Food Card Click (Home Page)**

   - **Issue**: When clicking on a food card, an error occurs, stating `setIsOpen is not a function`.
   - **Solution**: Ensure that `setIsOpen` is defined correctly and connected to the modal or toggle functionality.

2. **Popup Modal Issues in Product Card**

   - **Issue**: When a product card is clicked, a popup modal appears but does not display the product image correctly. Additionally, the close button in the modal does not work.
   - **Solution**: Adjust the image rendering logic within the modal to display the product image properly, and ensure the close button is fully functional.

3. **Non-Functional Search Feature**

   - **Issue**: The search functionality does not work, preventing users from finding recipes by name or ingredient.
   - **Solution**: Debug and update the search logic to retrieve and display relevant results as expected.

4. **Navigation Improvements for Sign In/Sign Up Buttons**

   - **Issue**: The Sign In and Sign Up buttons on the navbar need to function as navigation links for better user experience.
   - **Solution**: Update these buttons to act as navigation links to improve user flow.

5. **Padding Adjustments for UI Consistency**
   - **Issue**: Some elements, such as the search bar, require additional horizontal padding for improved visual consistency.
   - **Solution**: Apply padding adjustments to these elements for a cleaner, more polished design.

These fixes will enhance functionality, improve display consistency, and provide a better user experience throughout the app.

## Design and Responsiveness

- Ensured consistency in design, matching new features to the existing app style and adhering to accessibility standards for color contrast and font size.
- Made the entire app responsive, with all pages optimized for mobile, tablet, and desktop screen sizes.

# Technologies Used

This project utilizes a range of libraries and tools for both frontend and backend functionality, focusing on state management, form handling, and data fetching, among other features.

### Frontend Libraries

- **@headlessui/react**: ^2.1.10  
  Provides accessible and customizable UI components like modals and dropdowns.
- **@hookform/resolvers**: ^3.9.1  
  Integrates form validation schemas with `react-hook-form`.
- **@tanstack/react-query**: ^5.59.16  
  Facilitates server-state management with data fetching, caching, and synchronization capabilities.
- **axios**: ^1.7.7  
  A popular HTTP client for making API requests.
- **react**: ^18  
  The core library for building the user interface.
- **react-dom**: ^18  
  The DOM binding for React, required for web applications.
- **react-hook-form**: ^7.53.2  
  Handles form state and validation.
- **react-icons**: ^5.3.0  
  Provides a wide range of icons to use within the app.
- **react-redux**: ^9.1.2  
  Official React bindings for Redux to manage app-wide state.
- **react-spinners**: ^0.14.1  
  A collection of loading spinners for React.
- **redux**: ^5.0.1  
  A predictable state container for managing application state.
- **redux-persist**: ^6.0.0  
  Enables persistent storage for Redux state.

### Backend Libraries

- **bcryptjs**: ^2.4.3  
  Provides password hashing and comparison for authentication.
- **jsonwebtoken**: ^9.0.2  
  Used to securely manage JSON Web Tokens for user sessions.
- **mongoose**: ^8.8.1  
  A MongoDB object modeling tool to handle database interactions in Node.js.

### Utility Libraries

- **zod**: ^3.23.8  
  A TypeScript-first schema validation library for data parsing and validation.
- **i**: ^0.3.7  
  Utility library for inflection of strings.
- **sonner**: ^1.7.0  
  A library for providing toast notifications in the app.

These technologies collectively enable a robust development environment, providing efficient state management, form handling, and API interaction capabilities.

## Time Estimate

- **Total Time Spent**: Approximately 30 hours.

## How to Run Locally

1. Clone the repository: `git clone https://github.com/badaruddinomar/repliq-recipe-app.git`
2. Navigate to the project folder: `cd repliq-recipe-app`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
