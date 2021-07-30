import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { resetScore, selectCount } from '../../features/counter/counter'
import { CurrentName, setName } from '../../features/user/user'
import { achievements } from './achievement'
import { finishStyle } from './style'


const Finish = () => {

    const classes = finishStyle()
    const name = useSelector(CurrentName)
    const score = useSelector(selectCount)
    let title = ''
    const dispatch = useDispatch()
    const history = useHistory()
    const reset = useSelector(resetScore)

    const titleAchieved = (score) => {
        switch (score) {
            case 5:
                title = achievements[achievements.length - 1].title
                break;
            case 0:
                title = achievements[0].title
                break;
            default:
                title = achievements[1].title
                break;
        }

    }

    titleAchieved(score);



    return (
        <div
            className={classes.root}
        >
            <section
                className={classes.section}
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
                            {title}!
                        </Typography>
                        <Typography
                            className={classes.score}
                        >
                            You scored {score} of 5
                        </Typography>
                    </div>
                    <div
                        className={classes.buttonsContainer}
                    >
                        <div
                            className={classes.buttonWrapper}

                        >
                            <Button
                                variant='outlined'
                                className={classes.button}
                                onClick={() => {
                                    history.push('/template')
                                    dispatch(reset)
                                }}
                            >
                                Try Again
                            </Button>

                        </div>
                        <div
                            className={classes.buttonWrapper}

                        >
                            <Button
                                variant='outlined'
                                className={classes.button}
                                onClick={() => {
                                    history.push('/')
                                    dispatch(reset)
                                    dispatch(setName(''))
                                }}
                            >
                                Go Home
                            </Button>

                        </div>
                    </div>



                </Paper>
            </section>
        </div>
    )
}

export default Finish
