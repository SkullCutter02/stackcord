import React from "react";

import JoinOrCreateHallContainer from "../../../components/ui/hall/JoinOrCreateHallContainer";
import PrimaryTextInput from "../../../components/widgets/PrimaryTextInput";
import RoundedButton from "../../../components/widgets/RoundedButton";

const CreateHallPage: React.FC = () => {
  return (
    <>
      <JoinOrCreateHallContainer type={"create"}>
        <PrimaryTextInput
          placeholder={"Enter hall name here..."}
          name={"name"}
          margin={"20px 0 20px 0"}
          width={"40%"}
          backgroundColor={"var(--primaryBackgroundColor)"}
        />
        <RoundedButton
          buttonText={"Create"}
          width={"initial"}
          padding={"12px 30px"}
          buttonColor={"secondary"}
          fontSize={0.9}
        />
      </JoinOrCreateHallContainer>
    </>
  );
};

export default CreateHallPage;
