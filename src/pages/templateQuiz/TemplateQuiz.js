import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { templateStyle } from './styles'

const TemplateQuiz = () => {

    const classes = templateStyle()

    return (
        <div
            className={classes.root}
        >

            <Paper
                className={classes.paper}
            >
                <div
                    className={classes.Qwrapper}
                >
                    <Typography
                        className={classes.question}
                    >
                        Question Here
                    </Typography>
                </div>
                <div>
                    <Typography
                        className={classes.answerText}
                    >
                        Answers Here
                    </Typography>
                </div>
                <div
                    className={classes.Bwrapper}
                >
                    <Button
                        variant='outlined'
                        className={classes.button}
                        disabled
                    >
                        Next Question
                    </Button>
                </div>
            </Paper>

        </div>
    )
}

export default TemplateQuiz
