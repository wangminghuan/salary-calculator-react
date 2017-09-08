import React, {Component} from "react";
import "./CalItemSelect.scss";
import {Link, history} from 'react-router-dom';
import PropTypes from "prop-types";
export default class CalItemSelct extends Component{
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
      {this.props.type=="city"? 
          <Link to={{
            pathname: '/city', 
            state: { cityArr:this.props.cityArr}
          }}>
          <span>{this.props.title}</span>
          <em>{this.state.select}</em>
          </Link> : 
          <section >
            <span>{this.props.title}</span>
            <em>{this.state.select}</em>
          </section>
       }
          
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
CalItemSelct.contextTypes = {
  router: PropTypes.object
};
