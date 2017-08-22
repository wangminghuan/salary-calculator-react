import React, {Component} from "react";
import "./CalItemInput.scss";

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }
  handleChange=(ev)=>{
    this.setState({
      value:ev.target.value
    })
    _pubSub.publish("getInput",{
      value:ev.target.value,
      type:this.props.type
    })
  }
  render(){
    return(
      <li className="cal-item item-input">
        <span>{this.props.name}</span>
        <div>
          <input type="number" value={this.state.value} onChange={this.handleChange} placeholder={"请输入"+this.props.name} /><em>元</em>
        </div>
      </li>
    )
  }
  componentDidMount(){
    _pubSub.subscribe('getInput',(data)=>{
    //type相同的组件数据同步
     if(this.props.type===data.type){
          this.setState({
            value:data.value
          })
     }
    })
  }
}
