import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { QuestionBank } from './questions'
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
                    className={classes.dynamicWrapper}
                >
                    {QuestionBank.filter(item => item.id === 5).map(single => {
                        return (
                            <div key={single.id}>
                                <div
                                    className={classes.titleWrapper}
                                >
                                    <Typography
                                        className={classes.title}
                                    >
                                        Question #{single.id}
                                    </Typography>
                                </div>
                                <div
                                    className={classes.Qwrapper}
                                >
                                    <Typography
                                        className={classes.question}
                                    >
                                        {single.question}
                                    </Typography>
                                </div>
                                <div>
                                    <div
                                        className={classes.answerBox}
                                    >
                                        <div
                                            className={classes.answerWrapper}
                                        >
                                            <Button
                                                variant='contained'
                                                className={classes.answers}
                                            >
                                                {single.options.option1}
                                            </Button>
                                        </div>
                                        <div
                                            className={classes.answerWrapper}
                                        >
                                            <Button
                                                variant='contained'
                                                className={classes.answers}
                                            >
                                                {single.options.option2}
                                            </Button>
                                        </div>
                                        <div
                                            className={classes.answerWrapper}
                                        >
                                            <Button
                                                variant='contained'
                                                className={classes.answers}
                                            >{single.options.option3}
                                            </Button>
                                        </div>
                                        <div
                                            className={classes.answerWrapper}
                                        >
                                            <Button
                                                variant='contained'
                                                className={classes.answers}
                                            >
                                                {single.options.option4}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div
                    className={classes.staticWrapper}
                >
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
                    <Typography
                        className={classes.index}
                    >
                        Question . of 5
                    </Typography>
                </div>
            </Paper>

        </div>
    )
}

export default TemplateQuiz
