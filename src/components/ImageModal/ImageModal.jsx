import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(1, 1, 1, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflow: "hidden",
    background: "transparent",
  },
};

export default function ImageModal({ image, isOpen, onClose }) {
  Modal.setAppElement("#root");
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      onClick={handleClose}
    >
      <div>{<img src={image} />}</div>
    </Modal>
  );
}
