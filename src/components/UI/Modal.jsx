import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 z-30 min-h-full w-full bg-black/50"></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[35%] z-40 mx-auto w-[30%] rounded-xl bg-white p-5 shadow-md shadow-black/50">
      <div>{props.children}</div>
    </div>
  );
};

const portalWhere = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalWhere)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalWhere
      )}
    </>
  );
};

export default Modal;
