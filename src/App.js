import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import $ from 'jquery';

function App() {
  const updateParameters=()=>{
    
    let timeframe=document.getElementById('timeframeInput').value
    let daysToGoBack=document.getElementById('daysToGoBackInput').value
    let cashWeightage=document.getElementById('cashWeightageInput').value
    let futureWeightage=document.getElementById('futureWeightageInput').value
    let optionWeightage=document.getElementById('optionWeightageInput').value

    if(timeframe===''){
      timeframe=3
    }
    if(daysToGoBack===''){
      daysToGoBack=0
    }
    if(cashWeightage===''){
      cashWeightage=0.15
    }
    if(futureWeightage===''){
      futureWeightage=0.6
    }
    if(optionWeightage===''){
      optionWeightage=0.25
    }

    $.post("https://sour-jeans-hunt-20-219-14-157.loca.lt/updateParameters.php",{timeframeData:timeframe,daysToGoBackData:daysToGoBack,cashWeightageData:cashWeightage,futureWeightageData:futureWeightage,optionWeightageData:optionWeightage},(data)=>{
      console.log(data)
    })
  }
  const updateCred=()=>{
    
    let userIDShoonya=document.getElementById('userShoonyaInput').value
    let pwdShoonya=document.getElementById('pwdShoonyaInput').value
    let vcShoonya=document.getElementById('vcShoonyaInput').value
    let apiShoonya=document.getElementById('apiShoonyaInput').value
    let IMEIShoonya=document.getElementById('IMEIShoonyaInput').value
    let totpShoonya=document.getElementById('totpShoonyaInput').value

    if(userIDShoonya!=='' && pwdShoonya!=='' && vcShoonya!=='' && apiShoonya!=='' && IMEIShoonya!=='' && totpShoonya!==''){
      $.post("https://sour-jeans-hunt-20-219-14-157.loca.lt/updateCred.php",{userIDShoonya:userIDShoonya,pwdShoonya:pwdShoonya,vcShoonya:vcShoonya,apiShoonya:apiShoonya,IMEIShoonya:IMEIShoonya,totpShoonya:totpShoonya},(data)=>{
        console.log(data)
      })
    }else{
      $.post("https://sour-jeans-hunt-20-219-14-157.loca.lt/updateTotp.php",{totpShoonya:totpShoonya},(data)=>{
        window.open('http://127.0.0.1:5000/relogin','')
      })
    }
  }
  const runMoneyflow=()=>{
    window.open("https://sour-jeans-hunt-20-219-14-157.loca.lt/moneyflow.php",'')
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home updateParameters={updateParameters} updateCred={updateCred}/>} />
        <Route path='/charts' element={<Chart/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
