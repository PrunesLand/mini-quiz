import { makeStyles } from "@material-ui/core";

export const finishStyle = makeStyles((theme) => {
    return {
        root: {
            background: theme.palette.primary.main,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper: {
            height: '52vh',
            width: '85vw',
            [theme.breakpoints.up('sm')]: {
                width: '50vw',
                height: '70vh'
            }
        },
        container: {
            marginTop: theme.spacing(6)
        },
        staticText: {
            textAlign: 'center',
            padding: theme.spacing(2),
            fontSize: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(4)
            }
        },
        dynamicText: {
            textAlign: 'center',
            padding: theme.spacing(2),
            fontSize: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(5)
            }
        }
    }
})