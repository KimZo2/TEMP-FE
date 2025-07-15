// src/components/ui/Modal.jsx
import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      {/* 배경 */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* 모달 내용 */}
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        {children}
      </div>
    </>,
    document.getElementById('modal-root') || document.body
  );
}
