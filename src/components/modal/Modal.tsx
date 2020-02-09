import React, { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

interface IModalProps {
    visible: boolean;
    title?: string;

    onClose?(): void;
}

export const Modal: FC<IModalProps> = (props) => {
    const { visible, title, onClose, children } = props;
    const modal = useRef<HTMLDivElement>(null);

    return createPortal(
        <div
            className={'modal-layout'}
            data-hidden={!visible}
        >
            <div
                aria-hidden={true}
                onClick={onClose}
                className="modal-layout__overlay"
            />
            <div className="modal" ref={modal}>
                <div className="modal__header">
                    <button
                        className="modal__close"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                {title && (
                    <div className="modal__title">
                        {title}
                    </div>
                )}
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};