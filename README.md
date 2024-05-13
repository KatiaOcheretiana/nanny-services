# Nanny Services Application

This application is designed for a company offering nanny services. It consists of three main pages:

## Pages

1. Home Page

Displays the site title, company slogan, and a link to start using the application.
Upon clicking the link, users are redirected to the "Nannies" page.

2. Nannies Page

Lists nannies available for hire.
Users can sort the list of nannies alphabetically (ascending or descending), by price (lowest to highest or highest to lowest), or by popularity (lowest rating to highest rating or vice versa).
Users have the ability to add nannies to their favorites list by liking the respective nanny cards.

3. Favorites Page

Displays nannies added to favorites by the user.

## Technologies Used

- React.js
- TypeScript
- Redux (toolkit, redux-persist)
- Firebase
- React Router
- Styled-components
- Formik/Yup

## Features

- Firebase authentication: Implemented registration, login, fetching user data, and logout using Firebase Authentication.
- Change color theme: Added the ability to change the color theme of the application.
- Responsive Design: Implemented a responsive design from 320px to 1440px, ensuring correct display on mobile and tablet devices.

## How to Use

### Cloning the Repository

1. Clone the repository from GitHub using the following command:

```bash
  git clone https://github.com/KatiaOcheretiana/nanny-services
```

### Installing Dependencies

2. Navigate to the project directory:

```bash
 cd nanny-services
```

3. Install dependencies using yarn:

```bash
yarn
```

### Starting the Application

4. Once the dependencies are installed, start the application using:

```bash
yarn start
```

5. The application will start running locally, and you can access it via your web browser at `http://localhost:3000`.
