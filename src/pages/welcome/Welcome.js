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
                                onChange={e => setUser(e.target.value)}
                            />

                            <div
                                className={classes.buttonWrapper}
                            >
                                <Button
                                    variant='outlined'
                                    type='submit'
                                    className={classes.button}
                                >
                                    start
                                </Button>
                            </div>
                        </form>
                    </div>
                </Paper>
            </section>
        </div>
    )
}

export default Welcome
