import React, {Component} from "react";
import "./CalCityWrap.scss";

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      isShowWrap:false,
      position:""
    }
  }
  handleClickSelect=(select,index)=>{
    //发布信息，CalItemSelect组件接收，展示选择项
    _pubSub.publish('getSelect',{
      select:select
    })
    //通知app组件，目前哪个城市的config生效
    _pubSub.publish('getConfig',{
      index:index
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
      <ul className={`cal-item-city ${this.state.isShowWrap?"":"hide"}`}>
        <li className="go-back" onClick={this.handleClickBack}>返回上一级</li>
        {this.props.cityArr.map((child,index)=><li key={index} onClick={()=>this.handleClickSelect(child,index)}>{child}</li>)}
      </ul>
  )}
  componentDidMount(){
    //监听CalItemSelect组件发送的信息，来显示组件
    _pubSub.subscribe("getCityInfo",(data)=>{
      this.setState({
        isShowWrap:data.isShow
      })
    })
  }
}
