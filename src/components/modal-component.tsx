import React from "react";
import {Modal , Button} from "react-bootstrap"



interface Props{
    showModal: boolean;
    handlerOpenCloseModal: any;
    setOperation: any;
    calculate: any;

}

export default class ModalComponent extends React.Component<Props>{

    doAction(operation: string){
        console.log('state', operation)
        this.props.setOperation(operation)
        this.props.calculate(operation);
        this.props.handlerOpenCloseModal();
    }

    render(){
        
        const {showModal, handlerOpenCloseModal} = this.props;
            return(
                <div>
                    <Modal show={showModal} onHide={handlerOpenCloseModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Calcule</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <p>Selecione a operação q deseja executar</p>
                        </Modal.Body>

                        <Modal.Footer>
                        <Button variant="secondary" onClick={()=> this.doAction('+')}>Soma</Button>
                        <Button variant="primary"  onClick={()=> this.doAction('-')}>Subtração</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
        )
    }
}