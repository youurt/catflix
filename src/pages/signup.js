import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAdress === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAdress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email adress"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?
            <span />
            <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
