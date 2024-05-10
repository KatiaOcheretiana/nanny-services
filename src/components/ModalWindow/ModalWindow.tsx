// import { CloseModalBtn } from "./ModalWindow.styled";
// import sprite from "../../images/sprite.svg";
// import Modal from "react-modal";
// import { Styles } from "react-modal";

// type ModalWindowPropsType = {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   children: React.ReactNode;
//   heightParameter: string;
//   width?: string;
//   scroll?: string;
// };

// const ModalWindow = ({
//   isOpen,
//   onRequestClose,
//   heightParameter,
//   children,
//   width,
//   scroll,
// }: ModalWindowPropsType) => {
//   const customStyles: Styles = {
//     overlay: {
//       backgroundColor: "rgba(11, 11, 11, 0.6)",
//       zIndex: "1001",
//     },
//     content: {
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       backgroundColor: "#FBFBFB",
//       borderRadius: "30px",
//       padding: "0",
//       minWidth: "300px",
//       maxWidth: width || "565px",
//       height: heightParameter,
//       overflow: scroll || "hidden",
//     },
//   };

//   return (
//     <div>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={onRequestClose}
//         style={customStyles}
//       >
//         <CloseModalBtn onClick={() => onRequestClose()}>
//           <use href={`${sprite}#icon-x`}></use>
//         </CloseModalBtn>
//         {children}
//       </Modal>
//     </div>
//   );
// };

// Modal.setAppElement("#root");

// export default ModalWindow;

import { CloseModalBtn, ContentWrapper } from "./ModalWindow.styled";
import sprite from "../../images/sprite.svg";
import Modal from "react-modal";
import { Styles } from "react-modal";

type ModalWindowPropsType = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  heightParameter: string;
  width?: string;
  scroll?: string;
};

const ModalWindow = ({
  isOpen,
  onRequestClose,
  heightParameter,
  children,
  width,
  scroll,
}: ModalWindowPropsType) => {
  const customStyles: Styles = {
    overlay: {
      backgroundColor: "rgba(11, 11, 11, 0.6)",
      zIndex: "1001",
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
      maxWidth: width || "565px",
      height: heightParameter,
      // overflow: scroll || "hidden",
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
        <ContentWrapper
          style={{ overflow: scroll || "hidden", height: heightParameter }}
        >
          {" "}
          {children}
        </ContentWrapper>
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");

export default ModalWindow;
