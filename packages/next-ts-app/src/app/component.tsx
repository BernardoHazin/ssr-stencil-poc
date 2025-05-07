import { FunctionComponent } from "react";
import { MyComponent, OtherComponent } from "react-library";

const Component: FunctionComponent = () => {
  return (
    <>
      <MyComponent first="John" middle="Doe" last="Smith" />
      <OtherComponent first="John" middle="Doe" last="Smith" />
    </>
  );
};

export default Component;
