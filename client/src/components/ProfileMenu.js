import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  Text,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAppContext } from "../context/appContext";
import { FaUserCircle } from "react-icons/fa";

const ProfileMenu = () => {
  const { user, logout } = useAppContext();

  let name = user.name.split(" ");
  let newName = "";
  name.forEach((n) => {
    newName += n.charAt(0).toUpperCase();
  });

  return (
    <Menu>
      <MenuButton
        align="center"
        justifyContent="center"
        as={Button}
        rightIcon={<ChevronDownIcon style={{ color: "#63aab5" }} boxSize={6} />}
        leftIcon={<FaUserCircle style={{ color: "#63aab5" }} />}
      >
        <Text color="headline.400" fontWeight="bold">
          {newName}
        </Text>
      </MenuButton>
      <MenuList>
        <Link to="/profile">
          {" "}
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuDivider borderWidth="2px" borderColor="gray.200" />
        <Link to="/settings">
          <MenuItem>Settings</MenuItem>
        </Link>
        <MenuDivider borderWidth="2px" borderColor="gray.200" />
        <MenuItem onClick={logout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ProfileMenu;
