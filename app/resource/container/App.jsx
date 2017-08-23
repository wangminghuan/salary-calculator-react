import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link, hashHistory} from 'react-router-dom';
import pubSub from "PubSub";
import config from "../../common/config/config";
import CalHeaderTab from "../components/CalHeaderTab";
import CalSalary from "../components/CalSalary";
import CalYearend from "../components/CalYearend";
import CalSubmit from "../components/CalSubmit";
import CalCityWrap from "../components/CalCityWrap";
import CalSelectWrap from "../components/CalSelectWrap";
import SalaryResult from "../components/SalaryResult";
import initReactFastclick from 'react-fastclick';
initReactFastclick();
 class  App extends Component{
  constructor(props){
  	super(props);
    //建立一个全局变量，用于订阅发布通道
    window._pubSub=new pubSub();
    // this.cityArr=config.map((child,index)=>console.log(child.name))
    this.state={
      currentData:config[0]
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
      <CalCityWrap
      cityArr={config.map((child,index)=>child.name)}
     />
      <CalSelectWrap />
      <Link to="/salary">点我跳转到计算结果页面</Link>
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

//路由分发
export default class extends Component{
   constructor(props){
     super(props)
   }
   render(){
     return(
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/salary" component={SalaryResult}/>
        </div>
      </Router>
     )
   }
}
