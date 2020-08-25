import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  table: {
    minWidth: 650,
    backgroundColor: "lightgray",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
    margin: 8
  },
  appHeader: {
    textAlign: 'center',
    '& h1': {
        color: '#2c3e50',
        margin: '5vh 0 0 0',
        fontSize: '3rem',
        fontWeight: '300',
        '& span': {
            fontWeight: '700',
            color: 'rgb(18, 152, 161)'
        }
    },
    '& h2': {
        color: '#9aa1a5',
        fontSize: '1rem',
        fontWeight: '300'
    }
  } 
}));
