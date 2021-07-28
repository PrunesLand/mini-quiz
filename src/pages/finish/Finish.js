import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTitle, selectTitle } from '../../features/achievements/achievements'
import { selectCount } from '../../features/counter/counter'
import { CurrentName } from '../../features/user/user'
import { finishStyle } from './style'
import { VscDebugRestart } from 'react-icons/vsc'
const Finish = () => {

    const classes = finishStyle()
    const name = useSelector(CurrentName)
    const score = useSelector(selectCount)
    const title = useSelector(selectTitle)
    const dispatch = useDispatch()

    dispatch(calculateTitle(5))

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
                        className={classes.title}
                    >
                        {title}
                    </Typography>
                    <Typography
                        className={classes.score}
                    >
                        You scored {score} of 5
                    </Typography>
                </div>
                <div
                    className={classes.button}
                >
                    <VscDebugRestart />
                </div>


            </Paper>
        </div>
    )
}

export default Finish
