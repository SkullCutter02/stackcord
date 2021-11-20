import React from "react";
import JoinOrCreateHallContainer from "../../../components/ui/hall/JoinOrCreateHallContainer";
import PrimaryTextInput from "../../../components/widgets/PrimaryTextInput";
import RoundedButton from "../../../components/widgets/RoundedButton";

const JoinHallPage: React.FC = () => {
  return (
    <>
      <JoinOrCreateHallContainer type={"join"}>
        <PrimaryTextInput
          placeholder={"Enter hall code here..."}
          name={"code"}
          margin={"20px 0 20px 0"}
          width={"40%"}
          backgroundColor={"var(--primaryBackgroundColor)"}
        />
        <RoundedButton
          buttonText={"Join"}
          width={"initial"}
          padding={"12px 30px"}
          buttonColor={"primary"}
          fontSize={0.9}
        />
        <p>Want to create one instead?</p>
      </JoinOrCreateHallContainer>

      <style jsx>{`
        p {
          font-size: 0.8rem;
          color: var(--secondaryTextColor);
          margin-top: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default JoinHallPage;
