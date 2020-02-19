import React, { Component } from 'react';
import {connect}  from 'react-redux';
import {deleteTask} from '../actions/Action';
import Input from './Input'
import './Task.css'
import { Button} from 'react-bootstrap'

class Task extends Component {
    state={
        value:"",
        
    }
    
    render() {
        return (
            <div className="task">
                <p>{this.props.list}</p>
                <Button variant="secondary" onClick={()=>this.props.delete(this.props.id)}>
              Delete
            </Button>
            <Input id={this.props.id}/>{/* here we passed the id so we can use it to know which item to edit */}
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    delete:(id)=>dispatch(deleteTask(id))
    
 });
 
 export default connect(null,mapDispatchToProps)(Task)