import React, {Component} from "react";
import "./CalSelectWrap.scss";
export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      isShow:false,
      position:"",
      title:"",
      maxNum:0,
    }
  }
  handleClickRemove=()=>{
    this.setState({
      isShow:false
    })
  }
  handleClickSelect=(select)=>{
    this.handleClickRemove();
    _pubSub.publish('getSelect',{
      select:select,
      position:this.state.position
    })

  }
  render(){
    let renderArr=[];
    if(typeof this.state.maxNum=="number"){
      for(let i=this.state.maxNum;i>-1;i--){
        renderArr.push(i+"%")
      }
    }
    return(
      <section>
      <div className={`cal-select-wrap ${this.state.isShow?"":"hide"}`}>
         <div className="bg-black"></div>
         <div className="select-cont">
           <p><span>{this.state.title}</span><em onClick={this.handleClickRemove}>取消</em></p>
           <ul>
             {renderArr.map((child,index)=>
             <li key={index} onClick={()=>this.handleClickSelect(child)}>{child}</li>
           )}
           </ul>
         </div>
      </div>
    </section>
    )
  }
  componentDidMount(){
    _pubSub.subscribe('getInfo',(data)=>{
     this.setState({
       isShow:data.isShow,
       position:data.position,
       title:data.title,
       maxNum:data.maxNum
     })
    })
  }
}
