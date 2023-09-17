import { Modal as AntdModal } from "antd";

const Modal = ({isModalOpen, handleCancel, onOk, children}) => {
  return (
    <AntdModal open={isModalOpen} onCancel={handleCancel} onOk={onOk} width={1000}>
        {children}
    </AntdModal>
  )
}

export default Modal
