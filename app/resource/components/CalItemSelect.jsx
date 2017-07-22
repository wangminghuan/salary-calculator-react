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
    _pubSub.publish('getInfo',{
      isShow:true,
      index:this.props.index,
      type:this.props.type,
      title:this.props.title,
      maxNum:this.props.maxNum,
      arr:this.props.arr
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
    _pubSub.subscribe('getSelect',(data)=>{
      data.index==this.props.index && this.setState({
        select:data.select
      })
    })
  }
}
