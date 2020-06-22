import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [name, setName] = useState();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const setNameText = e => {
    setName(e.target.value);
  };
  const setIdText = e =>{
    setId(e.target.value);
  };
  const setPwdText = e => {
    setPwd(e.target.value);
  };
  const setBirthDateText = e =>{
    setBirthDate(e.target.value);
  };
  const setEmailText = e => {
    setEmail(e.target.value);
  };
  const setPhoneText = e =>{
    setPhone(e.target.value);
  };
  const setZipcodeText = e => {
    setZipcode(e.target.value);
  };
  const setAddress1Text = e =>{
    setAddress1(e.target.value);
  };
  const setAddress2Text = e =>{
    setAddress2(e.target.value);
  };
  
  const save = e => {
    e.preventDefault();
  };

class App extends Component{
  render(){
  return (
    <div className="App">
      <form onSubmit={save}>
        <FormLabel htmlFor='name'>이름</FormLabel>
        <input name="name" id="name" placeholder="이름을 입력하세요." onChange={setNameText}/><br/>
        <FormLabel htmlFor='id'>아이디</FormLabel>
        <input name="name" id="name" placeholder="이름을 입력하세요." onChange={setNameText}/><br/>

      </form>

    </div>
  )
  }
};

export default App;
