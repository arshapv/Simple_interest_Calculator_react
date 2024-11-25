import { useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'



function App() {

  const[amount,setAmount]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")

  const[isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const[isInvalidIntrest,setIsInvalidIntrest]=useState(false)
  const[isInvalidYear,setIsInvalidYear]=useState(false)

  const[intrest,setIntrest]=useState("")

  console.log(amount);
  console.log(rate);
  console.log(year);

    const validateInput=({name,value})=>{
    // const{name,value}=tag
    console.log(name,value);

   // console.log( !!value.match(/^[0-9]*.?[0-9]+$/))    //regular expression to block the letters to the text field (^- indicate start, $ -indicate the end,!!-indicate the true or false value and [0-9] indicate the numbers ,* - indicate many, .? -indicate that after that we want to put atlest one  number)
    
   if(value=="")
   {
    if(name=='principle')
   {
    setAmount("")
   }
   else if(name=='rate')
   {
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
    if(name=='principle')
    {
      setIsInvalidPrinciple(true)
   }
   else if(name=='rate')
   {
    setIsInvalidIntrest(true)
   }
   else
   {
    setIsInvalidYear(true)
   }
  }
}
    }

const handleCalculate=(e)=>{
e.preventDefault()       //to prevent the page reload event
console.log("Button Clicked");
if(amount&&rate&&year)
{
  const intrestVal = (amount*rate*year)/100
  setIntrest(intrestVal)
}
else
{
  alert("Enter the field completely")
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
      <div className=' align-item-center justify-content-center'>
        <h1>Simple Interest Calculator</h1>
        <h2>Calculate your Simple Interest Easily</h2> 
        <div className='border border-2 border-warnning' style={{width:'500px', height:'500px',backgroundColor:'green',marginLeft:'100px'}}>
          <div>
             <h1>₹{intrest}</h1>
             <h2>Total Simple Interest</h2>
             <form className='mt-5'>
               <TextField name='principle' onChange={(e)=>validateInput(e.target)} style={{width:"300px",marginBottom:'20px'}} id="princile_amount" label="Amount" variant="outlined" />
               {isInvalidPrinciple &&
                    <div className='text-danger font-bold mb-2'>Invalid Principle</div>
               }
               <TextField name='rate' onChange={(e)=>validateInput(e.target)} style={{width:"300px",marginBottom:'20px'}} id="interest" label="Interest" variant="outlined" />
               {isInvalidIntrest&&
              <div className='text-danger font-bold mb-2'>Invalid Intrest</div>
               }
               <TextField name='period' onChange={(e)=>validateInput(e.target)} style={{width:"300px"}} id="year" label="Year" variant="outlined" />
               {isInvalidYear&&
              <div className='text-danger font-bold mb-2'>Invalid Intrest</div>
               }
             <Stack direction="row" spacing={2} style={{marginTop:'20px'}} >
               <Button disabled={isInvalidPrinciple || isInvalidIntrest|| isInvalidYear } onClick={(e)=>handleCalculate(e)} type='submit' style={{marginLeft:'130px'}} variant="contained">Calculate</Button>
               <Button onClick={handleReset} variant="outlined">Reset</Button>  
             </Stack>

             </form>
          </div>
          </div>      
      </div>
      
    </>
  )
}

export default App
