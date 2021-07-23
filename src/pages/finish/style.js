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
            width: '85vw'
        },
        container: {

        },
        staticText: {

        },
        dynamicText: {

        }
    }
})