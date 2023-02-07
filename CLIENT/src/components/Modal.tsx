import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { ModalType } from '../types/types';

const Modal = ({ children }: ModalType) => {
  const { modalOpen, setModalOpen } = useContext(AppContext);

  //activate disable scroll on mount
  useEffect(() => {
    setModalOpen(true);
  }, []);

  //disable scroll
  modalOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'unset');

  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};
export default Modal;
