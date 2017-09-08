import React, {Component} from "react";
import "./CalCityWrap.scss";
import config from "../../common/config/config";
export default class extends Component{
  constructor(props){
    super(props);
    this.cityArr=config.map((child,index)=>child.name);
  }
  handleClickSelect=(select,index)=>{
    // window.localStorage.setItem("__select",'{city:'+select+',index:'+index+'}')
    window.localStorage.setItem("__select",index);
    window.history.go(-1)
  }
  render(){
    return(
        <ul className="cal-item-city">
         {this.cityArr.map((child,index)=><li key={index} onClick={()=>this.handleClickSelect(child,index)}>{child}</li>)}
      </ul>
  )}
  // componentDidMount(){
  //   console.log(this.props)
    // this.state.isShowWrap? window.location.hash="city" : window.history.go(-1);
    //监听CalItemSelect组件发送的信息，来显示组件
    // _pubSub.subscribe("getInfo",(data)=>{
    //   data.type==="city"&& this.setState({
    //     isShowWrap:data.isShow,
    //     type:data.type
    //   });
    //   data.isShow && (window.location.hash="city");
    // })
  // }
}
