import React, {Component} from "react";
import "./CalCityWrap.scss";

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      isShowWrap:false,
      type:"",
      index:0
    }
  }
  handleClickSelect=(select,index)=>{
    // 发布信息，CalItemSelect组件接收，展示选择项
    _pubSub.publish('getSelect',{
      select:select,
      type:this.state.type,
      index:index
    })
    this.handleClickBack();
  }
  handleClickBack=()=>{
    this.setState({
      isShowWrap:false
    })
    window.history && window.history.go(-1);
  }
  render(){
    return(
      <ul className={`cal-item-city ${this.state.isShowWrap?"":"hide"}`}>
        {/* <li className="go-back" onClick={this.handleClickBack}>返回上一级</li> */}
        {this.props.cityArr.map((child,index)=><li key={index} onClick={()=>this.handleClickSelect(child,index)}>{child}</li>)}
      </ul>
  )}
  componentDidMount(){
    // this.state.isShowWrap? window.location.hash="city" : window.history.go(-1);
    //监听CalItemSelect组件发送的信息，来显示组件
    _pubSub.subscribe("getInfo",(data)=>{
      data.type==="city"&& this.setState({
        isShowWrap:data.isShow,
        type:data.type
      });
      data.isShow && (window.location.hash="city");
    })
  }
}
