import React, {Component} from "react";
import "./CalSalary.scss";
import CalItemInput from "./CalItemInput";
import CalItemSelect from "./CalItemSelect";
export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      isShowMore:false
    }
  }
  handleClickShowMore=()=>{
    this.setState({
      isShowMore:!this.state.isShowMore
    })
  }
  render(){
    return(
      <ul className="cal-salary-wrap">
        <CalItemSelect
          index={0}
          select={"北京"}
          title={"当前城市"}
          type={""}
          maxNum={0}
          arr={['北京','上海','深圳','广州','天津','南京','武汉','杭州','重庆','济南','西安','成都','苏州','南昌','太原','石家庄']}
        />
        <CalItemInput name="税前月薪" />
        <li className="cal-item item-show-more" onClick={this.handleClickShowMore}><span>更多</span><em className={this.state.isShowMore?"up":"down"}></em></li>
        <ul className={this.state.isShowMore?null:"hide"}>
        <CalItemSelect
          index={1}
          select={"2%"}
          title={"个人公积金系数"}
          type={"number"}
          maxNum={10}
          arr={[]}
        />
        <CalItemSelect
          index={2}
          select={"4%"}
          title={"公司公积金系数"}
          type={"number"}
          maxNum={8}
          arr={[]}
        />
        <CalItemInput name="公积金基数" />
        <CalItemInput name="社保基数" />
        </ul>
      </ul>
    )
  }
}
