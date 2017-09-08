import React, {Component} from "react";

export default class extends Component{
  constructor(props){
    super(props);

  }
  render(){
    console.log(this.props)
      return(<div>我是工资计算结果组件</div>)
  }
  ComponentDidMount(){
    console.log(this.props)
  }
}