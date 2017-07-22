import React, {Component} from "react";
import "./CalSelectWrap.scss";
export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      type:"",
      name:"",
      isShow:false,
      max:0,
      arr:[]
    }
  }
  handleClickRemove=()=>{
    this.setState({
      isShow:false
    })
  }
  handleClickSelect=(text)=>{
    alert(text)
  }
  render(){
   let renderArr=[];
    if(this.state.type==="number" && this.state.max){
      for(let i=this.state.max;i>-1;i--){
        renderArr.push(i+"%")
      }
    }else{
      renderArr=this.state.arr
    }
    return(
      <section>
      <div className={`cal-select-wrap ${this.state.isShow?"":"hide"}`}>
         <div className="bg-black"></div>
         <div className="select-cont">
           <p><span>{this.state.name}</span><em onClick={this.handleClickRemove}>取消</em></p>
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
    _pubSub.subscribe('getInfo',function(data){
     this.setState({
       type:data.type,
       name:data.name,
       isShow:data.isShow,
       max:data.max,
       arr:data.arr
     })
    }.bind(this))
  }
}
