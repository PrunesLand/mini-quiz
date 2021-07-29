import { makeStyles } from "@material-ui/core";

export const templateStyle = makeStyles((theme) => {
    return {
        root: {
            background: theme.palette.primary.main,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper: {
            height: '72vh',
            width: '85vw'
        },
        Qwrapper: {
            padding: theme.spacing(1),
            textAlign: 'center'
        },
        question: {
            textAlign: 'center',
            padding: '0vh 5vh',
            fontSize: theme.spacing(2.5),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(4)
            }
        },
        button: {
            fontSize: theme.spacing(2),
            padding: '1vh 6vh',
        },
        Bwrapper: {
            padding: theme.spacing(1),
            textAlign: 'center',
        },
        answerBox: {
            padding: theme.spacing(2),
            [theme.breakpoints.up('xs')]: {
                width: '30vh'
            }


        },
        answers: {
            width: '65vw',
            padding: theme.spacing(0.5),
            fontSize: theme.spacing(0.5),
        },
        titleWrapper: {

        },
        title: {
            fontSize: theme.spacing(2),
            textAlign: 'center',
            padding: theme.spacing(1)
        },
        index: {
            textAlign: 'center',
            paddingTop: theme.spacing(2),
            fontSize: theme.spacing(1.5)
        },
        staticWrapper: {
            height: '20%'
        },
        dynamicWrapper: {
            height: '80%',
            textAlign: 'center',
        },
        radioWrapper: {
            alignContent: 'center'
        }

    }
})