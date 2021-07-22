import { makeStyles } from "@material-ui/core";

export const introStyle = makeStyles((theme) => {
    return {
        root: {
            background: theme.palette.primary.dark
        },
        section: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper: {
            height: '60vh',
            width: '60vw',

        },
        title: {
            textAlign: 'center',
            padding: theme.spacing(4),
            fontSize: theme.spacing(6)
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
            width: '45vw',
            fontSize: theme.spacing(3)
        },
        fieldIntro: {
            fontSize: theme.spacing(2)
        },
        field: {
            width: '20vw',
            margin: 'auto',
        },
        button: {
            width: '5vh',
            margin: 'auto',
            fontSize: theme.spacing(3),
            padding: '1vh 8vh'

        },
        buttonWrapper: {
            padding: theme.spacing(4)
        }
    }
})