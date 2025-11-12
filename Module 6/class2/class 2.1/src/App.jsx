import { useState } from "react";
import "./App.css";
import LoginForm from "./loginForm";
import { BigCatsSort, AddCatForm } from "./lab5";
import ErrorMessage from "./errormessage";
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <div>
        <BigCatsSort>
    
        </BigCatsSort>
      </div>
      <LoginForm />
      </ErrorBoundary>
    </>
  );
}

export default App;
