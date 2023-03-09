import { Flex, Button, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { FormInput, Logo, UIAlert } from "../components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const initialState = {
  name: "",
  password: "",
  email: "",
  isMember: true,
};

const Register = () => {
  const { showAlert, displayAlert, setupUser, user } = useAppContext();
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful..",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Registered..",
      });
    }
  };

  return (
    <Flex
      bgImage="url('ace.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      justify="center"
      align="center"
    >
      <Wrapper>
        <form className="form" onSubmit={onSubmit}>
          <Logo
            image={"apple-touch-icon.png"}
            size={"50px"}
            color={"#63aab5"}
          />
          <Heading as="h2" size="lg" color="headline.400" fontStyle="italic">
            {values.isMember ? "Login" : "Register"}
          </Heading>
          {showAlert && <UIAlert />}
          {!values.isMember && (
            <FormInput
              inputType="input"
              name="name"
              value={values.name}
              labelText="Name"
              handleChange={handleChange}
            />
          )}
          <FormInput
            inputType="input"
            name="email"
            value={values.email}
            labelText="Email"
            handleChange={handleChange}
          />
          <FormInput
            inputType="password"
            name="password"
            value={values.password}
            labelText="Password"
            handleChange={handleChange}
          />
          <button className="form-btn" bg="headline.400" color="white">
            Submit
          </button>
          <p>
            {values.isMember ? "Not a member yet? " : "Already a member? "}
            <Button
              color="headline.500"
              variant="link"
              className="register-btn"
              type="button"
              onClick={toggleMember}
            >
              {values.isMember ? "Register" : "Login"}
            </Button>
          </p>
        </form>
      </Wrapper>
    </Flex>
  );
};
export default Register;

const Wrapper = styled.section`
  .form {
    min-height: 400px;
    background-color: white;
    border: 3px solid #63aab5;
    margin: 0 auto;
    width: 35vw;
    display: flex;
    max-width: 500px;
    min-width: 400px;
    align-items: center;
    border-radius: 5px;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  .form-btn {
    width: 180px;
    margin: 5px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: #63aab5;
    border: none;
    padding: 5px;
  }
`;
