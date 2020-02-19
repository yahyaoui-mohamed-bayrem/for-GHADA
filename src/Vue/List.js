import React, { Component } from 'react'
import {connect} from 'react-redux'
import Task from './Task'
class List extends Component {
    render() {
        return (
            <div>
                {this.props.listTask.map((el,i)=>(
                <Task id={el.id} list={el.newtask}/>
                 ) )}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    listTask:state 
 });
export default connect(mapStateToProps)(List)