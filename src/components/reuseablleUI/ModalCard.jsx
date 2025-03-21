import React, { useState } from "react";
import { Modal } from "antd";

const ModalCard = ({
  isModalOpen,
  setIsModalOpen,
  // handleOk,
  // handleCancel,
  jsx,
  className,
  title,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={`${className}`}
      >
        {jsx}
      </Modal>
    </>
  );
};
export default ModalCard;
