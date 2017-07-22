import React, {Component} from "react";
import "./CalSubmit.scss";

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      tips:"",
      ableSubmit:true
    }
  }
  handleClick=()=>{
    if(this.state.ableSubmit){
      this.setState({
        tips:"别调皮哦,请输入准确的工资吧~",
        ableSubmit:false
      })
      setTimeout(()=>{
        this.setState({
          tips:"",
          ableSubmit:true
        })
      },1000)
   }
  }
  render(){
    return(
      <div className="cal-submit-wrap">
        <p className="submit" onClick={this.handleClick}>开始计算</p>
        <p className="tips">{this.state.tips}</p>
      </div>
    )
  }
}
