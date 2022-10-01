# Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents
- [Demo](#demo)
- [Installation](#instalation)
- [Usage](#usage)
- [Technologies used](#technologies-used)
- [Project Structure](#project-structure)
## Demo
[Demo](https://meryemyahya.github.io/Technical-test/)
## Instalation
```
npm install
```
## Usage

### Runs the app in the development mode.
```
npm start
```
### Builds the app for production to the build folder.
```
npm run build
```
### Deploy to github pages

Open your `package.json` and add a `homepage` field for your project:

```json
  "homepage": "https://username.github.io/repo-name",
```
then 
```
npm run deploy
```
## Technologies used
- [React query](https://github.com/TanStack/query)
- [Formik](https://github.com/jaredpalmer/formik)
- [Tailwind css](https://github.com/tailwindlabs/tailwindcss)
- [Axios](https://github.com/axios/axios)
- [Yup](https://github.com/jquense/yup)

## Project Structure
```
src/ 
├─ Components/
│  ├─ Card.js/
│  ├─ LoadingCard.js/
├─ Containers/
│  ├─ CardList.js/
│  ├─ LoginInput.js/
│  ├─ PrivateRoute.js/
├─ Context/
│  ├─ Context.js/
│  ├─ Provider.js/
├─ Layouts/
│  ├─ NavBar.js/
├─ Pages/
│  ├─ Home.js/
│  ├─ Login.js/
│  ├─ Posts.js/
├─ Services/
│  ├─ data.js/
├─ Validations/
│  ├─ inputValidation.js/
```



