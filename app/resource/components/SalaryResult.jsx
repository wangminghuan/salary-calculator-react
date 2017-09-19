import React, {Component} from "react";
import config from "../../common/config/config";
export default class extends Component{
  constructor(props){
    super(props);
    this.cityIndex=parseInt(window.localStorage.getItem("__select"))||0;
    this.pageData=this.props.location.state? this.props.location.state.data:null;
    this.renderData=this.pageData?this.pageData: JSON.parse(window.localStorage.getItem("__userinput__"));
  }
  render(){
      return(<div>我是工资计算结果组件</div>)
  }
  componentDidMount(){  
    if(this.renderData){
      window.localStorage.setItem("__userinput__",JSON.stringify(this.renderData));
    }
    //接收到的传递数据
    console.log(this.renderData);
    //接收到的配置数据
    console.log(config[this.cityIndex])
    if(!this.renderData){
      console.log("数据异常，请退出重试~")
    }
  }
}