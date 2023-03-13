// import './app.scss'
// import React from 'react'
// import { Paper,Stepper, Step,StepLabel,  Typography, CircularProgress, Divider, Button } from '@material-ui/core'
// import { useState ,useEffect} from 'react'
// import AddressForm from '../AddressForm/AddressForm'
// import PaymentForm from '../PaymentForm/PaymentForm'
// import { commerce } from '../../../lib/commerce'
// function Checkout({cart}) {
//   const [activeStep, setActiveStep] = useState(0);
//   const [checkoutToken, setCheckoutToken] = useState(null)
//   const steps = ['Shipping Address', 'Payment details'];
//   const Form = () => activeStep === 0 
//   ? <AddressForm/>  : <PaymentForm/>
//   const Confirmation = ()=> (
//     <div>
//       Confirmation
//     </div>
//   );
//   useEffect(() => {
//     const generateToken = async ()=>{
//       try {
//         const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});

//         console.log(token);
//        setCheckoutToken(token);
//       } catch (error) {

        
//       }
//       generateToken();
//     }
  
//     return () => {
      
//     }
//   }, [])
  
  

//   return (
    
//     <div className='toolbar'>
//       <main className='layout'>
//         <Paper className='paper'>
//           <Typography align='center' className='checkout-title'>Checkout</Typography>
//           <Stepper activeStep={activeStep} className='step'>
//             {steps.map((step) => (
//               <Step key={step}>
//                 <StepLabel >{step}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? <Confirmation/> : <Form/>}
//         </Paper>
//       </main>
//     </div>
//   )
// }

// export default Checkout