import { makeStyles } from "@material-ui/core";

export const navStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1
        },
        page: {
            height: '100%'
        },
        toolBar: theme.mixins.toolbar,
        footer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: theme.palette.primary.main,
            height: theme.spacing(10)
        },
        github: {
            fontSize: theme.spacing(4),
            cursor: 'pointer'
        }, footerText: {
            paddingRight: theme.spacing(2)
        },
    }
})