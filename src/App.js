import React, { useState } from "react";
import "./App.css";

//imported components
import { Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import posts from "./posts.json";
import filters from "./filters.json";
import FirstComponent from "./FirstComponent";
//importing Namer as a child component in FirstComponent
import Namer from "./Namer";
import ComponentWithButton from "./ComponentWithButton";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkOut, setCheckOut] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleCheckOut(event) {
    setCheckOut(event.target.value);
    setCheckOut(true);
  }

  function handleLogin(event) {
    event.preventDefault();
    if (email === "kojoasumani@hotmail.com" && password === "12345_6!" && checkOut === true) {
      setLoggedIn(true);
    }
  }

  //Map & arrow functions to return an entire list in the posts.json file. Map takes a list and returns it
  function postPos() {
    return posts.map((post) => <p key={post.pos}>{post.pos}</p>);
  }

  function postFname() {
    return posts.map((post) => <p key={post.fname}>{post.fname}</p>);
  }

  function postLname() {
    return posts.map((post) => <p key={post.lname}>{post.lname}</p>);
  }

  function postUname() {
    return posts.map((post) => <p key={post.uname}>{post.uname}</p>);
  }

  //Using map to return a new array
  function postMultiply() {
    const numList = [1, 2, 3, 4, 5];
    const newList = numList.map((number) => number * 3);
    return newList;
  }

  //Filter in react
  function pFilter() {
    return filters.filter((post) => {
      if (post === "first") {
        return <p>{post[0]}</p>;
      } else {
        //if you don't do this (add an else statement), you will have arrow function errors. it is always return/useEffect (() => {},[])
        return null;
      }
    });
  }

  return (
    <div className="main">
      {loggedIn === true ? (
        <p>Welcome Daniel! You've been successfully authourized, and we have been awaiting your return</p>
      ) : null}
      <h1>FORMS</h1>
      <hr style={{ backgroundColor: "white" }} />

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailInput} />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordInput}
          />

          <br />

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" value={checkOut} onChange={handleCheckOut} />
          </Form.Group>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form>

      <br />
      <br />
      <hr style={{ backgroundColor: "white" }} />
      <h1>MAP & FILTER</h1>
      <hr style={{ backgroundColor: "white" }} />
      <br />

      {/** Rendering the mapped values in a table */}
      <Table striped bordered hover size="sm" style={{ color: "white" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ color: "white" }}>
            <th>{postPos()}</th>
            <th>{postFname()}</th>
            <th>{postLname()}</th>
            <th>{postUname()}</th>
          </tr>
        </tbody>
      </Table>
      <br />
      {pFilter()}
      <br />
      <br />
      {/* rendering postMultiply() */}
      <p style={{ color: "white" }}>{postMultiply()}</p>

      <br />
      <br />
      <hr style={{ backgroundColor: "white" }} />
      <h1>REACT CHILDREN</h1>
      <hr style={{ backgroundColor: "black" }} />
      <br />

      {/* React Children */}
      <FirstComponent>
        <h3>Just demonstrating how props.children work in react</h3>
        <ol>
          <li>Pass props in component of choice</li>
          <li>Write props.children in curly braces somewhere in that component</li>
          <li>
            Now, you are free to render something new inside the component like demonstrated above in the h3
            tag element. Hooray!!!
          </li>
          <li>Props.children now allow the component to display anything written inside a component tag</li>
          <li>Heck! I could even render another component inside the FirstComponent like below</li>
          <li>
            <b>CHECK BELOW</b>
          </li>
        </ol>
        <hr style={{ backgroundColor: "black" }} />
        <Namer />
      </FirstComponent>
      <hr style={{ backgroundColor: "white", width:"50%" }} />
        <ComponentWithButton>
          <p>I am just playing around with props.children</p>
        </ComponentWithButton>
        <hr style={{ backgroundColor: "white", width:"50%" }} />
        <ComponentWithButton>
          <p>It will always render a button beside whatever I write.</p>
        </ComponentWithButton>
    </div>
  );
}

export default App;
