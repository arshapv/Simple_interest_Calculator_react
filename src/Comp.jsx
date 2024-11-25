import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
function Intrest() {

  const[amount,setAmount]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")

  const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const [isInvalidIntrest,setIsInvalidIntrest]=useState(false)
  const [isInvalidYear,setIsInvalidYear]=useState(false)

  const [intrest,setIntrest]=useState("")

  console.log(amount);
  console.log(rate);
  console.log(year);
  
  
  
  const validateInput=({name,value})=>{
    // const {name,value}=tag
    console.log(name,value);

   if(value==""){
    if(name=='principle'){
      setAmount("")
    }
    else if(name=='rate'){
      setRate("")
    }
    else{
      setYear("")
    }
   }
   else{
       if(!!value.match(/^[0-9]*.?[0-9]+$/)){

      if(name=='principle'){
        setAmount(value)
        setIsInvalidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsInvalidIntrest(false)
      }
      else{
        setYear(value)
        setIsInvalidYear(false)
      }
    }
    else{
      if(name=='principle'){
        setIsInvalidPrinciple(true)
      }
      else if(name=='rate'){
        setIsInvalidIntrest(true)
      }
      else{
        setIsInvalidYear(true)
      }
    }
   }
    
    
    
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(amount&&rate&&year){
      const intrestVal = (amount*rate*year)/100
      setIntrest(intrestVal)
    }
    else{
      alert("Enter the feild completely")
    }
  }

  const handleReset =()=>{

      setAmount(0)
      setRate(0)
      setYear(0)
      setIntrest(0)
      setIsInvalidPrinciple(false)
      setIsInvalidIntrest(false)
      setIsInvalidYear(false)
  }
  return (
    <>
      <h3>Simple Intrest Calculator</h3>
      <p>Calculate your simple Intrest Easily</p>
      <div style={{backgroundColor:"yellowgreen",minHeight:"40vh"}} className='container d-flex align-items-center justify-content-center flex-column h-25 rounded'>
          <h4 className='text-center text-light'>₹ &nbsp;{intrest}</h4>
          <h4 className='text-light'>Total Simple Intrest</h4>
      </div>
          <form className='mt-5'>
            <TextField name='principle' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id="principal_amount" label="Amount" variant="outlined" value={amount} />
              {isInvalidPrinciple&&
              <div className='text-danger fs-bold mb-2'>Invalid Principle Amount</div>
              }
            <TextField name='rate' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id="interest" label="Interest" variant="outlined" value={rate} />
              {isInvalidIntrest&&
              <div className='text-danger font-bold mb-2'>Invalid Intrest</div>
               }
            <TextField name='period' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id="year" label="Year" variant="outlined" value={year} />
              {isInvalidYear&&
                 <div className='text-danger font-bold mb-2'>Invalid Year</div>
              }

            <Stack direction="row" spacing={2}>
                 <Button disabled={isInvalidPrinciple || isInvalidIntrest|| isInvalidYear } onClick={(e)=>{handleCalculate(e)}} type='submit' className='w-100 bg-dark p-3' variant="contained">Calculate</Button>
                 <Button className='w-100 p-3' variant="outlined" onClick={handleReset}>Reset</Button>
            </Stack>
          </form>
    </>
  )
}

export default Intrest