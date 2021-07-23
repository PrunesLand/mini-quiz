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
            padding: theme.spacing(1)
        },
        question: {
            textAlign: 'center',
            width: '80vw'
        },
        button: {
            fontSize: theme.spacing(1.5)
        },
        Bwrapper: {
            padding: theme.spacing(1),
            textAlign: 'center'
        },
        answerBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        answerWrapper: {
            padding: theme.spacing(1)
        },
        answers: {
            width: '40vw',
            padding: theme.spacing(1),
            fontSize: theme.spacing(1.5)
        },
        titleWrapper: {

        },
        title: {
            fontSize: theme.spacing(4),
            textAlign: 'center',
            padding: theme.spacing(1)
        },
        index: {
            textAlign: 'center',
            paddingTop: theme.spacing(4),
            fontSize: theme.spacing(1.5)
        },
        staticWrapper: {
            height: '20%'
        },
        dynamicWrapper: {
            height: '80%'
        }

    }
})