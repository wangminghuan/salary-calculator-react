import React,{Component} from 'react';
import { HashRouter as Router, Route, Link, hashHistory} from 'react-router-dom';
import pubSub from "PubSub";
import config from "../../common/config/config";
import CalHeaderTab from "../components/CalHeaderTab";
import CalSalary from "../components/CalSalary";
import CalYearend from "../components/CalYearend";
import CalSubmit from "../components/CalSubmit";
import CalCityWrap from "../components/CalCityWrap";
import CalSelectWrap from "../components/CalSelectWrap";
import SalaryResult from "../components/SalaryResult";
import YearendResult from "../components/YearendResult";
import initReactFastclick from 'react-fastclick';
initReactFastclick();
 class  App extends Component{
  constructor(props){
    super(props);
    //建立一个全局变量，用于订阅发布通道
    window._pubSub=new pubSub();
    // this.localData=JSON.parse(JSON.stringify(window.localStorage.getItem("__select")));
    this.configIndex=isNaN(parseInt(window.localStorage.getItem("__select")))?0:parseInt(window.localStorage.getItem("__select"));
    this.state={
      currentData:config[parseInt(this.configIndex)],
    };
  }
  render() {
    return (
      <div>
      <CalHeaderTab>
         <CalSalary
           name="工资"
           itemData={this.salary}
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
  componentWillUnmount(){
    _pubSub.unsubscribeAll();
    //移除所有绑定的事件，防止重复绑定
  }
}

//路由分发
export default class extends Component{
   constructor(props){
     super(props);
     const name="jack";
   }
   render(){
     return(
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/salary" component={SalaryResult}/>
          <Route path="/city" component={CalCityWrap}/>
          <Route path="/yearend" component={YearendResult}/>
        </div>
      </Router>
     )
   }
}
