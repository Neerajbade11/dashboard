# Ecommerce Dashboard Project

This project is an E-commerce dashboard application built using React.js. The dashboard allows users to manage various categories and widgets, with features including adding, searching, and removing widgets. It offers a dynamic and interactive way to organize and monitor e-commerce-related tasks and data.

## Features

- **Home Page:** A simple landing page with a button that redirects to the dashboard.
- **Dashboard:** Displays categories and widgets associated with each category. Users can:
  - **Search Widgets:** Use the search bar in the navigation to find specific widgets.
  - **Add Widgets:** Add new widgets to any category using the 'Add Widget' functionality.
  - **Remove Widgets:** Remove unwanted widgets from any category.
  - **Cancel Operations:** Cancel widget addition or removal at any time.


## Live Demo
Check out the live version of the project [here](https://dashboard-three-liard-38.vercel.app/Dashboard).


## Project Structure

- **`App.js`:** The main entry point of the application. Wraps the application with the `EcommerceProvider` context and sets up routes for the home and dashboard pages.
- **`EcommerceContext.js`:** Manages global state for categories, widgets, and search functionality using React's Context API.
- **`Home.js`:** The landing page with a button to navigate to the dashboard.
- **`Dashboard.js`:** Displays categories and widgets, includes the search functionality, and provides options to add or remove widgets.
- **`Header.js`:** Contains the navigation bar with a search bar, user info, and menu options.
- **`Category.js`:** Represents a category containing multiple widgets. Allows users to add widgets to the specific category.
- **`Widget.js`:** Represents an individual widget with options to view details or remove the widget.
- **`AddWidget.js`:** A form that allows users to add new widgets to a category. Includes options to cancel or confirm the addition.

## Usage

1. **Home Page:**
   - When the application opens, you land on the home page.
   - Click on the "Go To Dashboard" button to navigate to the dashboard page.

2. **Dashboard:**
   - The dashboard displays categories, each with its respective widgets.
   - Use the search bar in the navigation to search for specific widgets by their name.
   - Click the "Add Widget" button within a category to open the Add Widget form.
   - Fill out the form to add a new widget or click "Cancel" to exit the form without adding a widget.
   - Remove widgets by clicking the "Remove" button on the widget card.

3. **Adding a New Widget:**
   - When in the dashboard, click the "Add Widget" button in any category.
   - A form will slide out from the right side of the screen.
   - Enter the widget name and details, then click "Add Widget" to confirm.
   - Alternatively, click "Cancel" to dismiss the form without adding a new widget.

## Dependencies

- **React:** A JavaScript library for building user interfaces.
- **React Router:** A library for routing in React applications.
- **uuid:** A library to generate unique IDs for categories and widgets.
- **React Icons:** A library for adding icons to your project.

## Conclusion

This E-commerce Dashboard project provides a practical way to manage various aspects of e-commerce data through a user-friendly interface. With features like search, add, and remove widgets, users can easily customize their dashboard according to their needs.
