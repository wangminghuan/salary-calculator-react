import React, {Component} from "react";
import "./CalItemInput.scss";

export default class extends Component{
  constructor(props){
    super(props);
  }
  handleChange=(ev)=>{
    _pubSub.publish("getInput",{
      value:ev.target.value,
      type:this.props.type
    })
  }
  render(){
    return(
      <li className="cal-item item-input">
        <span>{this.props.name}</span>
        <div>
          <input type="number" onChange={this.handleChange} placeholder={"请输入"+this.props.name} /><em>元</em>
        </div>
      </li>
    )
  }
  componentDidMount(){

  }
}
