import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editTask } from '../actions/Action';
import { Button, Modal } from 'react-bootstrap'



class Input extends Component {
  state = {
    value: "",
    show: false
  }
  handelChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleClose = () => this.setState({ show: false })
  handleShow = () => this.setState({ show: true })
  render() {
    return (
      <div>

        <Button variant="primary" onClick={this.handleShow}>
          Modifier
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>inserer la valeur</Modal.Title>
          </Modal.Header>
          <Modal.Body><input placeholder="inserer la nouvelle valeur" name="value" onChange={this.handelChange} value={this.state.value} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { this.handleClose(); this.props.edit(this.props.id, this.state.value) }}> {/* mnin jibtha l'id ??? from nowhere ! you didn't pass it as props in Task Component */}
              Edit
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    )
  }
}







const mapDispatchToProps = dispatch => ({
  edit: (id, newValue) => dispatch(editTask(id, newValue))
});

export default connect(null, mapDispatchToProps)(Input)