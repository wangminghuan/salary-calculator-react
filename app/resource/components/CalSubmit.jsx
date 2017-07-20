import React, {Component} from "react";
import "./CalSubmit.scss";

export default class extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="cal-submit-wrap">
        <p className="submit">开始计算</p>
        <p className="tips">别调皮哦,请输入准确的工资吧~</p>
      </div>
    )
  }
}
