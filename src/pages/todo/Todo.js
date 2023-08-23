import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";
import React, { useEffect } from "react";
import { Card } from '@mui/material';
import {
    Grid,
    Paper,
    Box
} from '@mui/material';

const Todo = () => {

    const dispatch = useDispatch()
    const todo = useSelector(appSelector.todo)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Todo
                   </Box>                    
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Todo;

