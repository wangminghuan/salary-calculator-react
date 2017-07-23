import React, {Component} from "react";
import "./CalYearend.scss";
import CalItemInput from "./CalItemInput";
import CalItemSelect from "./CalItemSelect";
export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      currentData:this.props.currentData
    }
  }
  render(){
    return(
      <ul className="cal-yearend-wrap">
        <CalItemSelect
          type={"city"}
          select={this.state.currentData.name}
          title={"当前城市"}
        />
        <CalItemInput
          name={"税前月薪"}
          type={"salary_year"}
        />
        <CalItemInput
          name={"税前年终奖"}
          type={"yearend"}
        />
      </ul>
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      currentData:nextProps.currentData
    })
  }
}
