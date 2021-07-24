import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentName } from '../../features/user/user'
import { achievements } from './achievement'
import { finishStyle } from './style'


const Finish = () => {

    const classes = finishStyle()
    const name = useSelector(CurrentName)

    return (
        <div
            className={classes.root}
        >
            <Paper
                className={classes.paper}
            >
                {achievements.filter(array => array.id === 3).map(item => {
                    return (
                        <div
                            className={classes.container}
                            key={item.id}
                        >
                            <Typography
                                className={classes.staticText}
                            >
                                Congrats!
                            </Typography>
                            <Typography
                                className={classes.dynamicText}
                            >
                                {name}
                            </Typography>
                            <Typography
                                className={classes.staticText}
                            >
                                You are a
                            </Typography>
                            <Typography
                                className={classes.dynamicText}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                className={classes.dynamicText}
                            >
                                You scored #score of 5
                            </Typography>
                        </div>
                    )
                })}

            </Paper>
        </div>
    )
}

export default Finish
