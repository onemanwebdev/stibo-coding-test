import React from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

import { ModalProps } from "../types";

export const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, children } = props;

  if (!isVisible) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};
