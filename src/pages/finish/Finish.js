import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { finishStyle } from './style'

const Finish = () => {

    const classes = finishStyle()

    return (
        <div
            className={classes.root}
        >
            <Paper
                className={classes.paper}
            >
                <div
                    className={classes.container}
                >
                    <Typography
                        className={classes.staticText}
                    >
                        Congrats
                    </Typography>
                    <Typography
                        className={classes.dynamicText}
                    >
                        Name
                    </Typography>
                    <Typography
                        className={classes.staticText}
                    >
                        You are a
                    </Typography>
                    <Typography
                        className={classes.dynamicText}
                    >
                        Title achieved
                    </Typography>
                </div>

            </Paper>
        </div>
    )
}

export default Finish
