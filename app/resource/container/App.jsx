import React,{Component} from 'react';
import pubSub from "PubSub";
import CalHeaderTab from "../components/CalHeaderTab";
import CalSalary from "../components/CalSalary";
import CalYearend from "../components/CalYearend";
import CalSubmit from "../components/CalSubmit";
import initReactFastclick from 'react-fastclick';
initReactFastclick();
export default class extends Component{
  constructor(props){
  	super(props);
    //建立一个全局变量，用于订阅发布通道
    //window._pubSub=new pubSub();
  }
  render() {
    return (
      <div>
      <CalHeaderTab>
         <CalSalary name="工资" />
         <CalYearend name="年终奖" />
      </CalHeaderTab>
      {/* <CalSalary />
      <CalYearend /> */}
      <CalSubmit />
    </div>
    )
  }
}
