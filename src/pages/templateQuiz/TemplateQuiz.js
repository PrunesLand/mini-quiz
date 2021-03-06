import { Button, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionBank } from './questions'
import { templateStyle } from './styles'
import { storeAnswer1, storeAnswer2, storeAnswer3, storeAnswer4, storeAnswer5, incrementPage, selectPage, resetPage } from '../../features/user/user';
import { useHistory } from 'react-router'
import { increment } from '../../features/counter/counter'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const TemplateQuiz = () => {
    const classes = templateStyle()
    const [question, setQuestion] = useState(1)
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(false)
    const page = useSelector(selectPage)
    const reset = useSelector(resetPage)
    const addValue = useSelector(increment)
    const history = useHistory()
    const [answerFlag, setAnswerFlag] = useState(false)

    // change into the next question
    // resets the hook values 
    const changeQuest = () => {
        dispatch(incrementPage())
        setQuestion(page + 1)
        setFlag(false)
        console.log('next question')
        if (page === 5) {
            history.push('/finish')
            setQuestion(1)
            dispatch(reset)
            console.log('all question answered, next page!')
        }
        // increments the user's score
        if (answerFlag === true) {
            dispatch(addValue)
            console.log('corrent answer!')
            setAnswerFlag(false)
        }
    }

    // click handler takes the user's clicked value and solution.
    const clickHandler = (answer, solution) => {
        console.log('click handled')
        // answer flag used to show the correct answer has been selected and prevent continuous increment on click
        if (answer === solution) {
            setAnswerFlag(true)
            console.log('flag raised')
        } else {
            setAnswerFlag(false)
        }
        // answer is saved into the store immediately
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
    }

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
                                    <div
                                        className={classes.radioWrapper}
                                    >
                                        <FormControl
                                            className={classes.answerBox}
                                        >
                                            <RadioGroup
                                            >

                                                <FormControlLabel
                                                    value={single.options.option1}
                                                    control={<Radio />}
                                                    label={single.options.option1}
                                                    className={classes.answers}
                                                    onClick={() => clickHandler(single.options.option1, single.solution)}
                                                />
                                                <FormControlLabel
                                                    value={single.options.option2}
                                                    control={<Radio />}
                                                    label={single.options.option2}
                                                    className={classes.answers}
                                                    onClick={() => clickHandler(single.options.option2, single.solution)}
                                                />
                                                <FormControlLabel
                                                    value={single.options.option3}
                                                    control={<Radio />}
                                                    label={single.options.option3}
                                                    className={classes.answers}
                                                    onClick={() => clickHandler(single.options.option3, single.solution)}

                                                />
                                                <FormControlLabel
                                                    value={single.options.option4}
                                                    control={<Radio />}
                                                    label={single.options.option4}
                                                    className={classes.answers}
                                                    onClick={() => clickHandler(single.options.option4, single.solution)}
                                                />
                                            </RadioGroup>
                                        </FormControl>
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
            </section>

        </div>
    )
}

export default TemplateQuiz
