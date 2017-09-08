import React from 'react';
import { render } from 'react-dom';
import pubSub from "PubSub";
import '../common/scss/reset.scss';
import App from './container/App.jsx';
//建立一个全局变量，用于订阅发布通道
window._pubSub=new pubSub();
render (<App />, document.getElementById('app'));
