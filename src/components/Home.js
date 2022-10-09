import React, {useEffect} from 'react'
import $ from 'jquery'
export default function Home(props) {
  
  
  return (
    <div className='row mx-5'>
        <div className='col-md-6'>
            <form>
                <h3>Money Flow Changes</h3>
                <div className="mb-3">
                    <label htmlFor="timeframe" className="form-label">Timeframe</label>
                    <select className='form-control' id='timeframeInput'>
                        <option value=''>
                            Select a timeframe
                        </option>
                        <option value='1'>
                            1 Minute
                        </option>
                        <option value='2'>
                            2 Minute
                        </option>
                        <option value='3'>
                            3 Minute
                        </option>
                        <option value='5'>
                            5 Minute
                        </option>
                        <option value='10'>
                            10 Minute
                        </option>
                        <option value='15'>
                            15 Minute
                        </option>
                        <option value='30'>
                            30 Minute
                        </option>
                        <option value='30'>
                            60 Minute
                        </option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="daysToGoBack" className="form-label">Days to go back</label>
                    <input type="number" className="form-control" id='daysToGoBackInput'/>
                </div>
                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="cashWeightage" className="form-label">Cash Weightage</label>
                        <input type="number" className="form-control" placeholder='0.15' id='cashWeightageInput'/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="futureWeightage" className="form-label">Future Weightage</label>
                        <input type="number" className="form-control" placeholder='0.6' id='futureWeightageInput'/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="optionWeightage" className="form-label">Option Weightage</label>
                        <input type="number" className="form-control" placeholder='0.25' id='optionWeightageInput'/>
                    </div>
                </div>
                <a className="btn btn-primary mb-2" onClick={props.updateParameters}>Update</a>
                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="userShoonya" className="form-label">User ID for Shoonya *</label>
                        <input type="text" className="form-control" id='userShoonyaInput'/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="pwdShoonya" className="form-label">Password for Shoonya *</label>
                        <input type="text" className="form-control" id='pwdShoonyaInput'/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="vcShoonya" className="form-label">VC for Shoonya *</label>
                        <input type="text" className="form-control" id='vcShoonyaInput'/>
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="apiShoonya" className="form-label">API for Shoonya *</label>
                        <input type="text" className="form-control" id='apiShoonyaInput'/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="IMEIShoonya" className="form-label">IMEI for Shoonya</label>
                        <input type="text" className="form-control" id='IMEIShoonyaInput' placeholder='abc1234'/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="totpShoonya" className="form-label">TOTP for Shoonya</label>
                    <input type="number" className="form-control" id='totpShoonyaInput'/>
                    <a className="btn btn-primary my-3" onClick={props.updateCred}>Login</a>
                </div>
            </form>
        </div>
        <div className='col-md-6'>
            <form>
                <h3>Run Scripts</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Run Moneyflow</label>
                    <br></br>
                    <button className="btn btn-primary my-1" onClick={props.runMoneyflow}>Run</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}
