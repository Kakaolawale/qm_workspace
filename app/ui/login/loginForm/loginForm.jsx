"use client";

import styles from "./loginForm.module.css";


const LoginForm = () => {

  return (
    <form action="" className={styles.form}>
      <h1>QuickMed Team WorkSpace Login</h1>
      <p>Login with your QuickMed WorkSpace team Credential as a staff.</p>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>
      <a href="./dashboard"
       >
      Log in
      </a>
      </button>
    </form>
  );
};

export default LoginForm;
