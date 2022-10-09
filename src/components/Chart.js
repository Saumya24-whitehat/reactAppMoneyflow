import React,{useState,useEffect} from 'react'
import $ from 'jquery'
import ChartLib from "react-apexcharts";


export default function Chart() {
    const [data,setData] =useState("hello")
    const urlFunc=()=>{$.post("https://sour-jeans-hunt-20-219-14-157.loca.lt/AllData.php",{'Bypass-Tunnel-Reminder':'true'},(data)=>{
        // console.log(data)
        setTimeout(()=>{
            setData(JSON.parse(data))
        },45)
        
    })}
    useEffect(()=>{
      setInterval(()=>{
        urlFunc()
      },10000)
    },[])
    console.log(data)
    const state = {
        options: {
          chart: {
            id: "basic-line"
          },
          xaxis: {
            categories: data[1],
            labels: {
              show: false,
            }
          },legend: {
            show: false,
          }
        },options2: {
          chart: {
            id: "basic-line"
          },
          xaxis: {
            categories: data[1],
            labels: {
              show: false,
            }
          },yaxis:{
            min:-2,
            max:2
          },legend: {
            show: false,
          }
        },options3: {
          chart: {
            id: "basic-line"
          },
          xaxis: {
            categories: data[1],
            labels: {
              show: false,
            }
          },yaxis:{
            min:-1.5,
            max:1.5
          },legend: {
            show: false,
          }
        },
        series: [
          {
            name: "Nifty",
            data: data[1]
          },{
            name: "NP",
            data: data[17]
          }
        ],
        series2: [
          {
            name: "Nifty ROC",
            data: data[19]
          },{
            name: "NP ROC",
            data: data[20]
          }
        ],series3: [
          {
            name: "Positive Z-Index",
            data: data[15]
          },{
            name: "Negative Z-Index",
            data: data[16]
          }
        ],series4: [
          {
            name: "Moneyflow",
            data: data[5]
          }
        ]
      };
    // console.log(data)
    return <>
      <div className='row'>
        <div className='col-md-6'>
          <ChartLib 
            options={state.options}
            series={state.series}
            type="line"
            width="100%"
            height="400"
          />
        </div>
        <div className='col-md-6'>
          <ChartLib 
              options={state.options}
              series={state.series4}
              type="line"
              width="100%"
              height="400"
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <ChartLib 
            options={state.options2}
            series={state.series2}
            type="line"
            width="100%"
            height="200"
          />
        </div>
        <div className='col-md-6'>
          <ChartLib 
              options={state.options3}
              series={state.series3}
              type="line"
              width="100%"
              height="200"
          />
        </div>
      </div>
    </>
  
}
