import React, {Component} from "react";
import "./CalSalary.scss";
import CalItemInput from "./CalItemInput";
import CalItemSelect from "./CalItemSelect";
export default class extends Component{
  render(){
    return(
      <ul className="cal-salary-wrap">
        <CalItemInput name="税前工资" />
        <CalItemInput name="公积金基数" />
        <CalItemInput name="社保基数" />
        <CalItemSelect name="个人公积金系数" />
      </ul>
    )
  }
}
