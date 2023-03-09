import { useAppContext } from "../context/appContext";

import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const UIAlert = () => {
  const { alertType, alertText } = useAppContext();

  return (
    <Alert status={alertType} justifyContent="center">
      <AlertIcon />
      <AlertTitle textAlign="center">{alertText}</AlertTitle>
    </Alert>
  );
};
export default UIAlert;
