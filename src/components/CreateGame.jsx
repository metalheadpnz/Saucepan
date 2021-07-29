import React, {useState} from 'react';
import ModalWindow from "./ModelWindow";


const CreateGame = () => {
    const modalWindowText = 'Новую игру создает один человек на всю компанию. Вы точно этого хотите?'
    const createGame = () => {
        setModalActive(true)
    }
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="selectGameBtnWrap">
            <button onClick={createGame} type="button" className="btn btn-danger btn-lg">СОЗДАТЬ ИГРУ</button>
            <button type="button" className="btn btn-success btn-lg">ПОДКЛЮЧИТЬСЯ</button>
            <ModalWindow active={modalActive} setActive={setModalActive} text={modalWindowText}/>
        </div>

    )
}

export default CreateGame