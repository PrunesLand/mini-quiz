import { Button, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionBank } from './questions'
import { templateStyle } from './styles'
import { storeAnswer1, storeAnswer2, storeAnswer3, storeAnswer4, storeAnswer5, incrementPage, selectPage } from '../../features/user/user';
import { useHistory } from 'react-router'


const TemplateQuiz = () => {
    const classes = templateStyle()
    const [question, setQuestion] = useState(1)
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(false)
    const page = useSelector(selectPage)
    const history = useHistory()

    const changeQuest = () => {
        dispatch(incrementPage())
        setQuestion(page + 1)
        setFlag(false)
        if (page === 5) {
            history.push('/finish')
        }
    }

    const clickHandler = (answer) => {
        switch (question) {
            case 1:
                dispatch(storeAnswer1(answer))
                break;
            case 2:
                dispatch(storeAnswer2(answer))
                break;
            case 3:
                dispatch(storeAnswer3(answer))
                break;
            case 4:
                dispatch(storeAnswer4(answer))
                break;
            case 5:
                dispatch(storeAnswer5(answer))
                break;
            default:
                break;

        }
        setFlag(true)
        console.log('clicked button')
    }

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
                    {QuestionBank.filter(item => item.id === question).map(single => {
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
                                                onClick={() => clickHandler(single.options.option1)}
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
                                                onClick={() => clickHandler(single.options.option2)}
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
                                                onClick={() => clickHandler(single.options.option3)}
                                            >
                                                {single.options.option3}
                                            </Button>
                                        </div>
                                        <div
                                            className={classes.answerWrapper}
                                        >
                                            <Button
                                                variant='contained'
                                                className={classes.answers}
                                                onClick={() => clickHandler(single.options.option4)}
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
                        {flag !== true ? <Button
                            variant='outlined'
                            className={classes.button}
                            disabled
                        >
                            Next Question
                        </Button> : <Button
                            variant='outlined'
                            className={classes.button}
                            onClick={() => changeQuest()}
                        >
                            Next Question
                        </Button>}
                    </div>
                    <Typography
                        className={classes.index}
                    >
                        Question {question} of 5
                    </Typography>
                </div>
            </Paper>

        </div>
    )
}

export default TemplateQuiz
