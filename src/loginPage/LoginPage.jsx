import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((email, password)) {
      navigate("/todos");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          // required
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          // required
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default LoginPage;
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
