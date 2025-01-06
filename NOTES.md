## Features

- Login/Sign up
    - Sign In / Sign Up form
    - redirect to browse page
- Browse (after  authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - Movie Suggestions
            - Movie Lists * N
- Netflix GPT
    - Search Bar
    - Movie suggestions

```powershell
npx create-react-app “appName”
```

**Bundler with create-react-app package:**

- It uses **webpack** instead of parcel as a bundler.

**Tailwind with create-react-app package**

- we don’t need to install and configure **postcss**.
- we can import css in entry point of our project instead of linking directly into html.

```powershell
import ./file.css 
```

**rafce → react arrow function component export**

- to create a boilerplate for react component

- **`web-vitals`:** The library that measures key performance metrics.
- **`reportWebVitals`:** A utility function to log or send these metrics to analytics.

### React StrictMode

- **Purpose:** `<React.StrictMode>` is a development tool to detect potential problems and enforce React best practices.
- **Usage:** Wrap your root component or specific parts of your app to enable strict checks.
- **Impact:** No performance impact in production, but provides useful warnings in development.

**Formik :**

library used to handle forms.

use when handles many fields or forms

### useRef

`useRef` is a React hook that provides a way to persist a mutable reference that doesn't trigger a re-render when updated. It is often used for directly accessing and interacting with DOM elements or to store mutable data across renders without causing re-renders.

```jsx
const refVal = useRef(initialValue);

//in the element what to be referred
<element ref={refVal}></element>

// to get the value.
refVal.current.value
```

- **`initialValue`**: The initial value of the reference object.
- **Returns**: An object `{ current: initialValue }`.

### **Key Characteristics**

1. **Persistent Reference**: The `current` property persists across renders.
2. **No Re-Renders**: Changing `ref.current` does not trigger a re-render.
3. **DOM Access**: Commonly used for accessing or manipulating DOM elements directly.
4. **Mutable Data**: Useful for storing mutable data that does not need to trigger UI updates.

Validating email and Regex test

```powershell
export const validateLogin = (email,password)=>{
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!validEmail){ 
        console.log(email);
        return "Email Id is not valid";}
    if(!validPassword) return "Password is not valid";
    return null;
}
```

- test → returns true or false

## Firebase

1. First create a new firebase Project
2. register webapp with deploy later feature
3. then follow add Firebase SDK
    1. npm install firebase
    2. create firebase.js (in utils) 
    
    ```jsx
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyByiS53dKZIlMG4lWI_97YZNYJOuv65SWc",
      authDomain: "netflixgpt-a9437.firebaseapp.com",
      projectId: "netflixgpt-a9437",
      storageBucket: "netflixgpt-a9437.firebasestorage.app",
      messagingSenderId: "807297630573",
      appId: "1:807297630573:web:8acbf5cae571b5c8945a64",
      measurementId: "G-VMKG5W86VG"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    ```
    
4. install Firebase CLI
    1. npm install -g firebase-tools
5. steps to deploy firebase
    
    ![{0C6338F2-CA41-44B1-8864-994E86C44F7D}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a05a376b-3abd-4829-90d1-6bb5b8bb871a/6fde09a3-febf-40de-96ca-22256094320c/0C6338F2-CA41-44B1-8864-994E86C44F7D.png)
    
    ![{06D74DD1-73F1-4009-873F-C0AE580927BE}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a05a376b-3abd-4829-90d1-6bb5b8bb871a/30e9ef04-0a84-4e49-80d4-b840ceefef67/06D74DD1-73F1-4009-873F-C0AE580927BE.png)
    

## useNavigate Hook

**Purpose:**

The `useNavigate` hook in React Router is used for programmatically navigating between routes in a React application.

**Usage:**

It allows you to redirect users to another page without relying on `<Link>` or `<Navigate>` components

```jsx
const navigate = useNavigate();

if(userSignedIn) navigate("/home");
```

## OnAuthChange from firebase

`onAuthStateChanged` is a Firebase Authentication method that listens for changes in the user's authentication state.