import React, {Component} from "react";
import "./CalSalary.scss";
import CalItemInput from "./CalItemInput";
import CalItemSelect from "./CalItemSelect";
export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      isShowMore:false,
      currentData:this.props.currentData
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
          type={"city"}
          select={this.state.currentData.name}
          title={"当前城市"}
        />
        <CalItemInput
          name={"税前月薪"}
          type={"salary"}
        />
        <li className="cal-item item-show-more" onClick={this.handleClickShowMore}><span>更多</span><em className={this.state.isShowMore?"up":"down"}></em></li>
        <ul className={this.state.isShowMore?null:"hide"}>
        <CalItemSelect
          type={"person"}
          select={this.state.currentData.housing.person}
          title={"个人公积金系数"}
          maxNum={12}
        />
        <CalItemSelect
          type={"company"}
          select={this.state.currentData.housing.company}
          title={"公司公积金系数"}
          maxNum={12}
        />
        <CalItemInput
          name={"公积金基数"}
          type={"houseNum"}
        />
        <CalItemInput
          name={"社保基数"}
          type={"socialNum"}
        />
        </ul>
      </ul>
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      currentData:nextProps.currentData
    })
  }
}
