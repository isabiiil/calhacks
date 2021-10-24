import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Input from "./pages/Input";
import Landing from "./pages/Landing";
import Questions from "./pages/Questions";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUzm27n9IkIV820A_VyyvCXb9v8cBI8A",
  authDomain: "hackher-9b4ed.firebaseapp.com",
  databaseURL: "https://hackher-9b4ed.firebaseio.com",
  projectId: "hackher-9b4ed",
  storageBucket: "hackher-9b4ed.appspot.com",
  messagingSenderId: "875167518655",
  appId: "1:875167518655:web:425f05463e6431d6601b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);


export default function App() {
  const InputComponent = () => <Input database={database} />
  return (
    <Router>
      <div className="bg-gradient-to-b from-green-300 to-purple-400 dark:from-green-700 dark:to-purple-800">
        <Switch>
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/input" component={InputComponent} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}