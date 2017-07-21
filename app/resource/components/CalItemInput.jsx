import React, {Component} from "react";
import "./CalItemInput.scss";

export default class extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li className="cal-item-input">
        <span>{this.props.name}</span>
        <div>
          <input type="number" placeholder={"请输入"+this.props.name} /><em>元</em>
        </div>
      </li>
    )
  }
}
