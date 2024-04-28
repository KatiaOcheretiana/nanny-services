import { CloseModalBtn } from "./ModalWindow.styled";
import sprite from "../../images/sprite.svg";
import Modal from "react-modal";
import { Styles } from "react-modal";

type ModalWindowPropsType = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  heightParameter: string;
};

const ModalWindow = ({
  isOpen,
  onRequestClose,
  heightParameter,
  children,
}: ModalWindowPropsType) => {
  const customStyles: Styles = {
    overlay: {
      backgroundColor: "rgba(11, 11, 11, 0.6)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FBFBFB",
      borderRadius: "30px",
      padding: "0",
      minWidth: "300px",
      maxWidth: "565px",
      height: heightParameter,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <CloseModalBtn onClick={() => onRequestClose()}>
          <use href={`${sprite}#icon-x`}></use>
        </CloseModalBtn>
        {children}
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");

export default ModalWindow;
