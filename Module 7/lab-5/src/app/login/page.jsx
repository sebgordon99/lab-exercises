"use client";

import { Rating } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../context/usercontext";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#555555ff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser, counter } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };

  {
    /* if the user is already logged in, show msg instead of form */
  }
  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );
  // otherwise render same form as previously, no changes

  return (
    <div className="Login">
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
      <Stack spacing={2}>
        <Item>
      <form onSubmit={handleSubmit}>
        <div className="LoginForm componentBox">
          <div className="formRow">
            <label>
              Email Address:
              {/* <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              /> */}
              <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              {/* <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              /> */}
              <TextField id="outlined-basic" label="Password" variant="outlined" />
            </label>
          </div>
        </div>

        <button>Log In</button>

        <p>{submitResult}</p>
      </form>
      </Item>
      <Item>
      <div>
        <div>How would you rate this log-in experience?</div>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Button variant="outlined" color="secondary" endIcon={<SendIcon />}>Submit</Button>
      </div>
      </Item>
      </Stack>
    </div>
  );
}