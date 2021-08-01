import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { TextField } from '@material-ui/core';
import { introStyle } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../../features/user/user';
import { useHistory } from 'react-router';



const Welcome = () => {
    const classes = introStyle()
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [flag, setFlag] = useState(false)

    // handles the value inputted into textbox and imediately saves any inputted value.
    //If no value is inputted or textbox is an empty string then the button is disabled
    const handleChange = (e) => {
        setUser(e.target.value)
        setFlag(true)

        if (e.target.value === '') {
            setFlag(false)
        }
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
                    <Typography
                        className={classes.title}
                    >
                        JRE Mini Quiz
                    </Typography>
                    <Typography
                        className={classes.intro}
                    >
                        How often do you watch JRE Podcast?

                    </Typography>
                    <Typography
                        className={classes.intro}
                    >

                        Come find out by taking this quick test!
                    </Typography>

                    <div
                        className={classes.fieldWrapper}
                    >
                        <form onSubmit={(e) => {
                            dispatch(setName(user))
                            history.push('/template')
                            console.log('name entered!')
                            e.preventDefault()
                        }
                        }>

                            <TextField
                                label='Enter your user'
                                className={classes.field}
                                value={user}
                                onChange={handleChange}
                            />

                            <div
                                className={classes.buttonWrapper}
                            >
                                {flag === true ? <Button
                                    variant='outlined'
                                    type='submit'
                                    className={classes.button}
                                >
                                    start
                                </Button> :

                                    <Button
                                        variant='outlined'
                                        type='submit'
                                        className={classes.button}
                                        disabled
                                    >
                                        start
                                    </Button>}
                            </div>
                        </form>
                    </div>
                </Paper>

            </section>
        </div>
    )
}

export default Welcome
