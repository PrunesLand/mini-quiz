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
            height: '52vh',
            width: '85vw'
        },
        Qwrapper: {

        },
        question: {
            fontSize: theme.spacing(4),
            textAlign: 'center',
            padding: theme.spacing(2)
        },
        answerText: {

        },
        button: {

        },
        Bwrapper: {

        }

    }
})