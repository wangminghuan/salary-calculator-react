import React, {Component} from "react";
import config from "../../common/config/config";
export default class extends Component{
  constructor(props){
    super(props);
    this.cityIndex=parseInt(window.localStorage.getItem("__select"))||0;
    this.pageData=this.props.location.state? this.props.location.state.data:null;
    this.renderData=this.pageData?this.pageData: JSON.parse(window.localStorage.getItem("__userinput__"));
    
    // 用户所在城市的默认配置
    this.cityConfig=config[this.cityIndex];
    //用户所在城市社保最低基数
    // this.minHousingBase=this.cityConfig.socialNum.min;
    //用户输入的薪资
    this.userSalary=this.renderData.userSalayInput.salary;

    //用户输入的公积金基数
    this.userHousingBase=this.renderData.userSalayInput.houseNum||0;

    //用户输入的社保基数
    this.userSocialBase=this.renderData.userSalayInput.socialNum||0;
     

    //用户住房公积金上缴金额
    this.housing= 0; 
    
    // 用户养老保险上缴金额
    this.endowment=0;
    
    // 用户医疗保险上缴金额
    this.medical=0;
    
    // 用户失业保险上缴金额
    this.unemployment=0;
    
    // 用户个人所得税 
    // 应纳税所得额 = 工资收入金额 － 各项社会保险费 － 起征点(3500元)
    // 应纳税额 = 应纳税所得额 x 税率 － 速算扣除数
    
     
  }
   getFinalHousing(){
        let result={
          per:["0","0%"],
          com:["0","0%"]
        };
        let perCom=0;
        if(this.userHousingBase){//用户输入基数时
            
        }else{

        }
        
   }
  render(){
      return(<div>我是工资计算结果组件</div>)
  }
  componentDidMount(){  
    if(this.renderData){
      window.localStorage.setItem("__userinput__",JSON.stringify(this.renderData));
    }
    //接收到的传递数据
    console.log(this.renderData);
    //接收到的配置数据
    console.log(config[this.cityIndex])
    if(!this.renderData){
      console.log("数据异常，请退出重试~")
    }
  }
}