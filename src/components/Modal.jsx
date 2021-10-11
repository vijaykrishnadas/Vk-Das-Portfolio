import React from 'react'




const Modal = ({closeModal}) => {
    return (
        <div className="modal">
            <div className="modal-wrapper">
                <h2>Message Sent 😃</h2>
                <h3>Thank You, I'll get back to you in a short while....</h3>
                <button onClick={()=> closeModal(false)}>Close</button>
            </div>
      </div>
    )
}

export default Modal
