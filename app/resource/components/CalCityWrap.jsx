import React, {Component} from "react";
import "./CalItemCity.scss";

export default class extends Component{
  constructor(props){
    super(props);
    this.cityArr=["北京","上海","成都"];
    this.state={
      isShowWrap:false,
      current:"北京"
    }
  }
  handleClickShowWrap=()=>{
    this.setState({
      isShowWrap:true
    })
  }
  handleClickSelect=(text)=>{
    this.setState({
      current:text
    })
    this.handleClickBack();
  }
  handleClickBack=()=>{
    this.setState({
      isShowWrap:false
    })
  }
  render(){
    return(
      <li className="cal-item item-select">
      <span>当前城市</span>
      <div onClick={this.handleClickShowWrap}>{this.state.current}</div>
      <ul className={`cal-item-city ${this.state.isShowWrap?"":"hide"}`}>
        <li className="go-back" onClick={this.handleClickBack}>返回上一级</li>
        {this.cityArr.map((child,index)=><li key={index} onClick={()=>this.handleClickSelect(child)}>{child}</li>)}
      </ul>
      </li>
  )}
}
