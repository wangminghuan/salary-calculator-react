import React,{Component} from 'react';
import pubSub from "PubSub";
import config from "../../common/config/config";
import CalHeaderTab from "../components/CalHeaderTab";
import CalSalary from "../components/CalSalary";
import CalYearend from "../components/CalYearend";
import CalSubmit from "../components/CalSubmit";
import CalCityWrap from "../components/CalCityWrap";
import CalSelectWrap from "../components/CalSelectWrap";
import initReactFastclick from 'react-fastclick';
initReactFastclick();
export default class extends Component{
  constructor(props){
  	super(props);
    //建立一个全局变量，用于订阅发布通道
    window._pubSub=new pubSub();
    // this.cityArr=config.map((child,index)=>console.log(child.name))
    this.state={
      currentData:config[0]
    };
    this.salary={
      name:"税前月薪",
      type:"salary"
    };
    this.personHoseCoef={
      name:"个人公积金系数",
      type:"person"
    };
    this.companyHoseCoef={
      name:"公司公积金系数",
      type:"company"
    };
    this.salary={
      name:"税前月薪",
      type:"salary"
    };
  }
  render() {
    return (
      <div>
      <CalHeaderTab>
         <CalSalary
           name="工资"
           currentData={this.state.currentData}
         />
         <CalYearend
           name="年终奖"
           currentData={this.state.currentData}
         />
      </CalHeaderTab>

      <CalSubmit
        currentData={this.state.currentData}
      />
      <CalCityWrap
      cityArr={config.map((child,index)=>child.name)}
     />
      <CalSelectWrap />
    </div>
    )
  }
  componentDidMount(){
    _pubSub.subscribe("getSelect",(data)=>{
      typeof data.index=="number" && this.setState({
        currentData:config[data.index]
      })
    })
  }
}
