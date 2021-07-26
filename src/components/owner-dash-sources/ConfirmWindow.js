import React from 'react'
import ReactDom  from 'react-dom';
import './ConfirmWindow.css'

export default function ConfirmWindow({open, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            {document.body.setAttribute('style','overflow:hidden;')}
                <div className="confirm-window-page">
                    <div className="exit-zone" onClick={onClose}></div>
                    <div className="confirm-window-cont">
                        <div className="confirm-type-cont">
                            <h3>Confirm</h3>
                        </div>
                        <div className="confirm-question-cont">
                            <p>Are you sure you would like to continue?</p>
                        </div>
                        <div className="confirm-buttons-cont">
                            <button className="confirm-no-button" onClick={()=>{}}>No</button>
                            <button className="confirm-yes-button"onClick={()=>{}}>Yes</button>
                        </div>
                    </div>
                </div>
           
        </>,
        document.getElementById('confirm-window-pop-up')
    )
}

