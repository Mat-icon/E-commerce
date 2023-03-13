import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme)=>(
    {
        toolbar: theme.mixins.toolbar,
       
        link : {
            fontSize: '18px',
            color: 'orange',
        },
        cardDetails : {
            marginBottom :'5%',
            display: 'flex',
            flexDirection : 'row',
            alignItems: 'center',
            justifyContent : 'space-between',
            padding : '0px 60px'

        },
        
    }
));