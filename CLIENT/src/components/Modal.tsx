import { PropsWithChildren, useState } from 'react';

const Modal = ({ children }: PropsWithChildren) => {
  // const [modalOpen, setModalOpen] = useState(true);

  // // //disable scroll
  // modalOpen
  //   ? (document.body.style.overflow = 'hidden')
  //   : (document.body.style.overflow = 'scroll');

  return (
    // <div
    //   // className={`modal ${!modalOpen && 'hidden'}`}
    //   // onClick={() => setModalOpen((prev) => !prev)}
    // >
    //   {children}
    // </div>

    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};
export default Modal;
