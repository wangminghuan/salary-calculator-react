import React, {Component} from "react";
import "./CalSalary.scss";
import CalItemInput from "./CalItemInput";
export default class extends Component{
  render(){
    return(
      <div className="cal-salary-wrap">
        <CalItemInput name="税前工资" />
      </div>
    )
  }
}
