import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { ProfileMenu } from "./index.js";

const NavLinks = () => {
  const { user } = useAppContext();

  return (
    <Flex gap={9} align="center" fontSize={20}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "white" : "#f2f2f2 ",
          fontWeight: isActive ? "bold" : "",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "white" : "#f2f2f2 ",
          fontWeight: isActive ? "bold" : "",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/rules"
        style={({ isActive }) => ({
          color: isActive ? "white" : "#f2f2f2 ",
          fontWeight: isActive ? "bold" : "",
        })}
      >
        Rules
      </NavLink>
      <NavLink
        to="/strategy"
        style={({ isActive }) => ({
          color: isActive ? "white" : "#f2f2f2 ",
          fontWeight: isActive ? "bold" : "",
        })}
      >
        Strategy
      </NavLink>
      <NavLink
        to="/practice"
        style={({ isActive }) => ({
          color: isActive ? "white" : "#f2f2f2 ",
          fontWeight: isActive ? "bold" : "",
        })}
      >
        Practice
      </NavLink>
      <NavLink
        to="/play"
        style={({ isActive }) => ({
          color: isActive ? "white" : "#f2f2f2 ",
          fontWeight: isActive ? "bold" : "",
        })}
      >
        Play
      </NavLink>
      {user ? (
        <ProfileMenu />
      ) : (
        <NavLink to="/register" style={{ color: "#f2f2f2" }}>
          Sign In / Register
        </NavLink>
      )}
    </Flex>
  );
};
export default NavLinks;
