import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { TextField } from '@material-ui/core';
import { introStyle } from './styles';

const Welcome = () => {
    const classes = introStyle()

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
                        <TextField label='Enter your name' className={classes.field} />
                        <div
                            className={classes.buttonWrapper}
                        >
                            <Button
                                variant='outlined'
                                className={classes.button}>
                                start
                            </Button>
                        </div>
                    </div>
                </Paper>
            </section>
        </div>
    )
}

export default Welcome
