import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavCard = ({ text, backText, url, mT }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/${url}`);
  };

  return (
    <div
      className={`flippable-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardFlip}
      style={{ marginTop: mT }}
    >
      <div className="front">
        {" "}
        <Card
          h={"280px"}
          w={"185px"}
          fontSize="40px"
          borderRadius="10px"
          border="2px solid white"
          bg="primarytxt.600"
          color="white"
        >
          {" "}
          <CardHeader fontFamily="Shantell Sans" fontSize="30px">
            LS
          </CardHeader>
          <Spacer />
          <CardBody alignSelf="center">{text}</CardBody>
          <Spacer />
          <CardFooter
            alignSelf="end"
            fontFamily="Shantell Sans"
            fontSize="30px"
            style={{ transform: "rotate(180deg)" }}
          >
            LS
          </CardFooter>
        </Card>
      </div>
      <div className="back">
        {" "}
        <Card
          h={"280px"}
          w={"185px"}
          fontSize="18px"
          borderRadius="10px"
          border="2px solid black"
        >
          {" "}
          <CardBody alignSelf="center">{backText}</CardBody>
          <Spacer />
          <Button
            onClick={handleClick}
            height="80px"
            fontSize="20px"
            color="primarytxt.700"
            bg="headline.200"
            _hover={{ bg: "headline.400" }}
          >
            {text}
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default NavCard;
