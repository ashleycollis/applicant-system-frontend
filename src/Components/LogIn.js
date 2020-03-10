import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'react-bootstrap';
import Navigation from '../../Navigation';

function LogIn() {
  return (
    <Form className="login">
      <h1 classname="title">Inclusion Admin Page</h1>
      <h2>Sign In</h2>
      <FormGroup>
        <Label>Username</Label>
        <Input type="username" placeholder="username"></Input>
        <Label>Password</Label>
        <Input type="password" placeholder="password"></Input>
      </FormGroup>
      <button className="btn-lg btn-dark btn-block"> Log In</button>
    </Form>
  );
}

export default LogIn;
