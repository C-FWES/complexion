import React from "react";
import Modal from 'react-modal';

const PresenterModal = ({open, onHide, slides}) => {

    return (
        <Modal 
        isOpen={open} 
        onRequestClose={onHide}
        style={{
            overlay: {
                zIndex: '999',
            },
            content: {
                backgroundColor: 'var(--muted-text)',
                color: 'var(--slide-text-color)',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }
        }}>
            <div className="presentationContainer">

            </div>
        </Modal>
    )

}

export default PresenterModal