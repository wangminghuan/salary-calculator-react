import React,{Component} from 'react';
import './CalHeaderTab.scss';

class TabComponent extends Component{
  constructor(props){
        super(props);
        this.state={
          current:0,
          itemStyle:{},
          curTabConHg:0,
        };
        this.winWidth=document.documentElement.clientWidth;
    }
  handleClick=(index)=>{
    this.setState({
      current:index,
      itemStyle:index===1?'translate(-'+this.winWidth+'px, 0px) translateZ(0px)':'translate(0px, 0px) translateZ(0px)'
    })
    _pubSub.publish("tabIndex",{
      current:index
    })
  }
  render() {
    return (
      <section className="cal-tab-wrap">
      <ul className="cal-tab-head">
        {React.Children.map(this.props.children, (item,index)=>
          <li onClick={()=>this.handleClick(index)}
            className={this.state.current===index?"active":null}>
            {item.props.name}
          </li>
        )}
      </ul>
      <div ref="section" className="cal-tab-cont" style={this.state.current==1?{"height":this.state.curTabConHg}:null}>
        {React.Children.map(this.props.children, (item,index)=>
          <section  className="tab-item" style={{transform:this.state.itemStyle}}>{item}</section>
        )}
      </div>
    </section>
    )

  }
  componentDidMount(){
    const wrap=this.refs.section;
    this.setState({
      curTabConHg:wrap.getElementsByClassName("tab-item")[1].offsetHeight
    })
  }
}

export default class extends Component{
  constructor(props){
        super(props);
    }
  render() {
    return (
      <TabComponent>{this.props.children}</TabComponent>
    )

  }
}
