import * as C from './styled';

type Props = {
    onCloseModal: () => void;
}

const ModalAddItem = ({ onCloseModal } : Props) => {

    const closeModal = (e:any) => {
        if(e.target.classList.contains("modal")){
            onCloseModal();
        }
        else{

        }
    }

    return (
        <C.Container className="modal" onClick={closeModal}>
            <C.Body>

            </C.Body>
        </C.Container>
    )
}


export default ModalAddItem;