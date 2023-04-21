import React from "react";
import { Button, } from "react-bootstrap";
import ModalComponent from "./modal-component";


interface Props{
    showModal: boolean;
    handlerOpenCloseModal: any;
    setOperation: any;
    calculate: any;

}

export default class ButtonComponent extends React.Component<Props>{

    

    render(){
        const {showModal, handlerOpenCloseModal} = this.props;
            return(
                <div>
                    <Button variant="primary" onClick={handlerOpenCloseModal}>Clique aqui para realizar a operação</Button>
                    <ModalComponent 
                    showModal={showModal} 
                    calculate={this.props.calculate}
                    setOperation={this.props.setOperation}
                    handlerOpenCloseModal={this.props.handlerOpenCloseModal}
                    />
                </div>
            )
    }
}