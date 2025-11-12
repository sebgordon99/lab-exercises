import { useState } from "react";

export function ButtonDisplay() {
  // input state values always need to be strings - empty initially
  const [calcButton, setCalcButton] = useState("");
  // new state value for showing submission messages to user
  const [submitResult, setSubmitResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (badPasswordLimit >= 6) {
      const attemptDisplay = badPasswordLimit;
      setSubmitResult(
        `Too many failed password attempts. Your daily attempts: ${attemptDisplay}. Try again in 5 seconds.`,
      );
    }
  };

  return (<div>
    {calcButton}
  </div>
  );
}