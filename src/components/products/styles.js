import { makeStyles } from "@material-ui/core";

export default makeStyles(()=> ({
    media : {
        height :200,
        width: '100%',
    },
    cardContent : {
        display : 'flex',
        justifyContent : 'space-between',
    },
    cardActions:{
        justifyContent : 'space-between',
    },
   
}))