import React, {Component} from "react";
import "./CalSubmit.scss";
import PropTypes from "prop-types";
export default class SubmitComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      currentTab:0,
      tips:"",
      currentData:this.props.currentData,
      ableSubmit:true,
      userSalaySelect:{},
      userSalayInput:{}
    }
  }
  handleClick=()=>{
    if(this.state.ableSubmit && !this.state.userSalayInput.salary){
      this.setState({
        tips:"别调皮哦,请输入准确的工资吧~",
        ableSubmit:false
      })
      setTimeout(()=>{
        this.setState({
          tips:"",
          ableSubmit:true
        })
      },1000)
   }else{
     //react-router 4.0+版本吧push方法移动到了history对象下
     //2.x版本是this.context.router.push("/salary"); 数据可以通过state或者query的方式进行传递
     let sendData={
      userSalaySelect:this.state.userSalaySelect,
      userSalayInput:this.state.userSalayInput
     }
     this.state.currentTab==0 ? this.context.router.history.push({
      pathname:'/salary',
      state:{data:sendData},
      }) : this.context.router.history.push({
        pathname:'/yearend',
        state:{data:sendData},
      })
   }
  }
  render(){
    return(
      <div className="cal-submit-wrap">
        <p className="submit" onClick={this.handleClick}>开始计算</p>
        <p className="tips">{this.state.tips}</p>
      </div>
    )
  }
  componentDidMount(){
    _pubSub.subscribe('getSelect',(data)=>{
      if(!data.type || data.type=="city") return;
      let newData=this.state.userSalaySelect;
      newData[data.type]=data.select;
      this.setState({
         userSalaySelect:newData
       })
    })

    _pubSub.subscribe("getInput",(data)=>{
      let newData=this.state.userSalayInput;
      newData[data.type]=data.value;
      this.setState({
          userSalayInput:newData
        })
    })

    _pubSub.subscribe("tabIndex",(data)=>{
      this.setState({
          currentTab:data.current
        })
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      currentData:nextProps.currentData
    })
  }
}
SubmitComponent.contextTypes = {
  router: PropTypes.object
};
