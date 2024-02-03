import '../styles/Modal.css';
import close from '../Images/Icons/close.png'

const Modal = ({title, onClose, children}) => {

    return (
        <div className="form-popup">
            <div className="top-part">
                <span role="button" className="close-btn" onClick={onClose}>
                <img src={close} alt='Close icon' />
                </span>
                <span className="title">{title}</span>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}

export default Modal;