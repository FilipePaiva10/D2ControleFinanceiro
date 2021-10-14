import * as C from './styled';

type Props = {
    onShowModal: () => void;
    onAddItem: () => void;
}

const ModalAddItem = ({ onShowModal, onAddItem}: Props) => {

    const closeModal = (e: any) => {
        if (e.target.classList.contains("modal")) {
            onShowModal();
        }
        else {

        }
    }

    const handleAddItem = () => {
        onAddItem();
        onShowModal();
    }

    return (
        <C.Container className="modal" onClick={closeModal}>
            <C.Content>
                <C.Body>
                    <C.TitleArea>
                        <C.Title>Título</C.Title>
                        <C.InputTitle
                            type="text"
                            placeholder="digite o seu gasto ou receita"
                        />
                    </C.TitleArea>
                    <C.CategoryArea>
                        <C.CategoryTitle>Categoria</C.CategoryTitle>
                        <C.CategorySelect>
                            <C.CategoryOption>Alimentação</C.CategoryOption>
                        </C.CategorySelect>
                    </C.CategoryArea>
                    <C.ValueArea>
                        <C.ValueText>Valor</C.ValueText>
                        <C.InputValue
                            type="number"
                            placeholder="Ex: 23.50"
                        />
                    </C.ValueArea>
                </C.Body>
                <C.Footer>
                    <C.BtnAdd
                        onClick={handleAddItem}
                    >Adicionar</C.BtnAdd>
                </C.Footer>
            </C.Content>
        </C.Container>
    )
}


export default ModalAddItem;