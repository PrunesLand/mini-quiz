import { makeStyles } from "@material-ui/core";

//this is the style of the welcome page. 
//This will be imported into the welcome page for better easeability when building.
export const introStyle = makeStyles((theme) => {
    return {
        root: {
            background: theme.palette.primary.dark,
            flexGrow: 1
        },
        section: {
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(5)
        },
        paper: {
            height: theme.spacing(50),
            width: '85vw',
            [theme.breakpoints.up('sm')]: {
                width: '60vw',
                height: '70vh'
            }

        },
        title: {
            textAlign: 'center',
            padding: theme.spacing(4),
            fontSize: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(6),

            }
        },
        fieldWrapper: {
            height: '10vh',
            textAlign: 'center',
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',

        },
        intro: {
            margin: 'auto',
            textAlign: 'center',
            width: '75vw',
            fontSize: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(3),
                width: '55vw'

            }
        },
        fieldIntro: {
            fontSize: theme.spacing(2)
        },
        field: {
            width: '50vw',
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                width: '30vh'
            }

        },
        button: {
            width: '5vh',
            margin: 'auto',
            padding: '1vh 6vh',
            fontSize: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(3),
                padding: '1vh 8vh',

            }

        },
        buttonWrapper: {
            padding: theme.spacing(4)
        },
    }
})