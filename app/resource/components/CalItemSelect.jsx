import React, {Component} from "react";
import "./CalItemSelect.scss";

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      select:this.props.select
    }
  }
  handleClick=()=>{
    //点击按钮，向CalCityWrap或CalSelectWrap组件发送信息，通知组件显示
      _pubSub.publish('getInfo',{
        isShow:true,
        type:this.props.type,
        title:this.props.title,
        maxNum:this.props.maxNum,
        })
  }
  render(){
    return(
      <li className="cal-item item-select" onClick={this.handleClick}>
          <span>{this.props.title}</span>
          <div>{this.state.select}</div>
      </li>
    )
  }
  componentDidMount(){
  //监听CalCityWrap或CalSelectWrap组件发送过来的选项信息，更新组件状态
    _pubSub.subscribe('getSelect',(data)=>{
      this.props.type && data.type==this.props.type && this.setState({
        select:data.select
      })
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      select:nextProps.select
    })
  }
}
