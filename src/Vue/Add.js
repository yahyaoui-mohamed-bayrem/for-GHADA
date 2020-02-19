import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addNewTask} from '../actions/Action';
import './Add.css';
import{Button} from 'react-bootstrap'



class Add extends Component {
    state={
        newtask:""// changed "valu" to "newtask"
    }
    
    onChangeValue =(event) => {
        this.setState({newtask : event.target.value} );
      
      }
    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <h1 >Daily Todo Lists</h1>
                    </div>
                </div>
                <div class="col-12">
                    
                <input type="text" value={this.state.newtask} onChange={this.onChangeValue}/>
                <Button variant="success" onClick={()=>{this.props.addTask({id: Date.now(), newtask: this.state.newtask})}} >+</Button>
                {/* <button class="primary" onClick={()=>{this.props.addTask(this.state.value)}}>+</button> */}
                <span></span>
                    </div>
                <div>
                </div>
               
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
   addTask:(payload)=>dispatch(addNewTask(payload)) 
});

export default connect(null,mapDispatchToProps)(Add)