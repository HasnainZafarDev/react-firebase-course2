import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(auth?.currentUser?.email)
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Firebase Authentication</h1>
      <div className="inputContainer">
        <input
          placeholder="Enter Your Email..."
          className="input1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Your Password..."
          className="input2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
        <button onClick={logOut}>Sign Out</button>
      </div>
    </div>
  );
};
