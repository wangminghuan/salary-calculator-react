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
    return (
      <section className="cal-tab-wrap">
      <ul className="cal-tab-head">
        {React.Children.map(this.props.children, (item,index)=>
          <li onClick={()=>{this.setState({
            current:index,
            itemStyle:index===1?'translate(-320px, 0px) translateZ(0px)':'translate(0px, 0px) translateZ(0px)'})}}
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
      <TabComponent>
        <div name="工资" className="tab-item">第一部分</div>
        <div name="年终奖" className="tab-item">第二部分</div>
      </TabComponent>
    )

  }
}
