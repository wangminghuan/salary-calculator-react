import React, {Component} from "react";
import "./CalItemSelect.scss";

export default class extends Component{
  constructor(props){
    super(props);
  }
  handleClick=()=>{
    _pubSub.publish('getInfo',{
      type:"number",
      name:"公积金系数",
      isShow:true,
      max:10,
      arr:[]
        })
  }
  render(){
    return(
      <li className="cal-item item-select" onClick={this.handleClick}>
          <span>{this.props.name}</span>
          <div>2%</div>
      </li>
    )
  }
}
