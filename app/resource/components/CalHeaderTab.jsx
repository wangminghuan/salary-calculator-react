import React,{Component} from 'react';
import './CalHeaderTab.scss';

class TabComponent extends Component{
  constructor(props){
        super(props);
        this.state={
          current:0,
          itemStyle:{}
        }
    }
  render() {
    const winWidth=document.documentElement.clientWidth;
    return (
      <section className="cal-tab-wrap">
      <ul className="cal-tab-head">
        {React.Children.map(this.props.children, (item,index)=>
          <li onClick={()=>{this.setState({
            current:index,
            itemStyle:index===1?'translate(-'+winWidth+'px, 0px) translateZ(0px)':'translate(0px, 0px) translateZ(0px)'})}}
            className={this.state.current===index?"active":null}>
            {item.props.name}
          </li>
        )}
      </ul>
      <div className="cal-tab-cont">
        {React.Children.map(this.props.children, (item,index)=>
          <section className="tab-item" style={{transform:this.state.itemStyle}}>{item}</section>
        )}
      </div>
    </section>
    )

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
