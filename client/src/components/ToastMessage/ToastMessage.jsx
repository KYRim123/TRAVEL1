import React from 'react'
import "./ToastMessageStyles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export default function ToastMessage(props) {
    return (
        <div className="toast--message" >
            <FontAwesomeIcon className="toast--message__icon" icon={props.icon === 'success' ? faCircleCheck : faCircleXmark} />
            <div className="toast--message__content">
                <h4 className="toast--message--title">{props.title}</h4>
                <p className="toast--message--des">{props.des}</p>
            </div>
        </div>
    )
}
