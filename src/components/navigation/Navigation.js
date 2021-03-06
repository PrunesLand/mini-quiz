import React from 'react'
import { navStyles } from './styles'
import { FaGithub } from 'react-icons/fa'
import { Typography } from '@material-ui/core'


// Navigations wrapps the whole application enables a global display of the footing. Reduces repetetive code of foooter
const Navigation = ({ children }) => {

    const classes = navStyles()

    return (
        <div
            className={classes.root}
        >
            <div className={classes.page}>

                {children}

            </div>
            <footer
                className={classes.footer}
            >

                <Typography
                    className={classes.footerText}
                >
                    Made by PrunesLand

                </Typography>
                <FaGithub
                    className={classes.github}
                    onClick={() => window.open('https://github.com/PrunesLand')}
                />

            </footer>
        </div>
    )
}

export default Navigation
