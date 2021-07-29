import React from 'react';

const ModalWindow = ({active, setActive, text}) => {
    return (
        <div className={active ? 'modalWindow' : 'modalWindow hide'}>  {/*Скрыть показать модальное окно*/}
            <div className="modal__content">
                {text ? text : 'Тут должен быть текст'}
                <div>
                    <button onClick={() => setActive(false)} className={'btn btn-danger ynBtn'}>да</button>
                    <button onClick={() => setActive(false)} className={'btn btn-success ynBtn'}>нет</button>
                </div>
            </div>

        </div>
    )
}

export default ModalWindow