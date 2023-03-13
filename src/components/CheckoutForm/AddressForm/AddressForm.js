// import React, { useState } from 'react'
// import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
// import { useForm, FormProvider } from 'react-hook-form';
// import { commerce } from '../../../lib/commerce';
// import './app.scss'
// import FormInput from './CustomTextField';
// import { Link } from 'react-router-dom';
// function AddressForm() {
//     /*{const [shippingCountries, setShippingCountries] = useState([]);
//     const [shippingCountry, setShippingCountry] = useState('');
//     const [shippingSubdivisions, setShippingSubdivsions] = useState([]);
//     const [shippingSubdivision, setShippingSubdivsion] = useState('');
//     const [shippingOptions, setShippingOptions] = useState([]);
//     const [shippingOption, setShippingOption] = useState('');

//     const methods = useForm();

//     const fetchShippingCountries = async (checkoutTokenId) => {
//         const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        
//     setShippingCountries (countries);}*/
    

//   return (
//     <>
//         <Typography  className='address-title' gutterBottom>Shipping Address</Typography>
//         <FormProvider {...methods}>
//            <form onSubmit={methods.handleSubmit((data)=> next())} >
//               <Grid container spacing={3} >
//                 <FormInput required  name='firstName' label ='First Name'/>
//                 <FormInput required  name='lastName' label ='Last Name'/>
//                 <FormInput required  name='address' label ='Address'/>
//                 <FormInput required  name='email' label ='Email'/>
//                 <FormInput required  name='city' label ='City'/>
//                 <FormInput required  name='zip' label ='ZIP /Postal code'/>
                
//                 {/* <Grid item xs={12} sm={6}>
//                    <InputLabel>Shipping Country</InputLabel>
//                    <Select value={} fullWidth onChange={}> 
//                        <MenuItem key={} value={}>
//                        Select Me
//                        </MenuItem>
//                    </Select>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                    <InputLabel>Shipping Sub-division</InputLabel>
//                    <Select value={} fullWidth onChange={}> 
//                        <MenuItem key={} value={}>
//                        Select Me
//                        </MenuItem>
//                    </Select>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                    <InputLabel>Shipping Options</InputLabel>
//                    <Select value={} fullWidth onChange={}> 
//                        <MenuItem key={} value={}>
//                         Select Me
//                        </MenuItem>
//                    </Select>
//                 </Grid> */}
//               </Grid>
//               <div className='check-btn'>
//                   <Button component={Link} to='/cart' className='check-back'>Back</Button>
//                   <Button type='submit' className='check-back' >Next</Button>
//               </div>
            

//            </form>
//         </FormProvider>
//     </>
//   )
// }

// export default AddressForm