import React from "react";
import { Modal } from "react-bootstrap";
import "./style.scss"

function NewUserPopup({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign up offer</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="msg">Flat <span>30%</span> for new users🎉🎉🎉</div>
      </Modal.Body>
    </Modal>
  );
}

export default NewUserPopup;
