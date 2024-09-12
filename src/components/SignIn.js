import React from "react";

const SignIn = () => {
  return (
    <div className="signin">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
