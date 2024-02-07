import { useState } from "react";import { Card, Form, Button } from "react-bootstrap";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChanged = (e) => setUsername(e.target.value);

  const handlePasswordChanged = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  const content = (
    <Card className="w-50 mx-auto">
      <Card.Body>
        <Card.Title className="mb-3">Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter username here"
              onChange={handleUsernameChanged}
              value={username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password here"
              onChange={handlePasswordChanged}
              value={password}
            />
          </Form.Group>
          <Button type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
  return content;
};
export default Login;
