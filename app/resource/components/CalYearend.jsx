import React, {Component} from "react";
import "./CalYearend.scss";
import CalItemInput from "./CalItemInput";
import CalItemSelect from "./CalItemSelect";
export default class extends Component{
  render(){
    return(
      <ul className="cal-yearend-wrap">
        <CalItemInput name="税前月薪" />
        <CalItemInput name="税前年终奖" />
      </ul>
    )
  }
}
