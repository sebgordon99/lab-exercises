import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // new state value for showing submission messages to user
  const [submitResult, setSubmitResult] = useState("");
  const [badPasswordLimit, setBadPasswordLimit] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setBadPasswordLimit(badPasswordLimit + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setBadPasswordLimit(badPasswordLimit + 1);
    } else if (userEmail.length >= 25) {
      setSubmitResult("Email must be at most 24 characters long");
      setBadPasswordLimit(badPasswordLimit + 1);
    } else {
      setSubmitResult("Successful login.");
    }

    if (badPasswordLimit >= 6) {
      const attemptDisplay = badPasswordLimit;
      setSubmitResult(
        `Too many failed password attempts. Your daily attempts: ${attemptDisplay}. Try again in 5 seconds.`,
      );

      setTimeout(() => {
        setBadPasswordLimit(0);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {badPasswordLimit <= 5 && (
        <div className="LoginForm componentBox">
          <div className="formRow">
            <label>
              Email Address:
              {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target value.
Whenever user types, new value is stored in state. */}
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
      <button>Log In</button>
      <p>{submitResult}</p>
    </form>
  );
}

// try removing the onChange prop and typing in a field
export default LoginForm;
