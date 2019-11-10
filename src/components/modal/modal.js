import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalWin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  
            isOpen: props.isOpen,                 //  статус активности 
            modalTitle: props.modalTitle,                               //  title окна
            body: props.body,                                           //  body окна
            pBtn: props.pBtn ? props.pBtn : 'Подтвердить',              //  текст первой кнопкт
            sBtn: props.sBtn ? props.sBtn : 'Отменить',                 //  текст второй кнопки
            pBtnClick: props.pBtnClick ? props.pBtnClick : this.toggle,  //  onClick первой кнопки
            sBtnClick: props.sBtnClick ? props.sBtnClick : this.toggle, //  onClick второй кнопки
            className: props.className ? props.className : ''
        }
    }
  
    toggle = () => {
        this.setState(({isOpen}) => ({
            isOpen: !isOpen
        }))
    }
    
    render() {
        return (
          <div>
            <Modal isOpen={this.state.isOpen} toggle={this.state.toggle} className={this.state.className}>
              <ModalHeader toggle={this.state.toggle}>{this.state.modalTitle}</ModalHeader>
              <ModalBody>
                  {this.state.body}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.state.pBtnClick}>{this.state.pBtn}</Button>
                <Button color="secondary" onClick={this.state.sBtnClick}>{this.state.sBtn}</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
  }
  