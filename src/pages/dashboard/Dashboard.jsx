import React, { useEffect } from "react";
import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
import {
    Grid,
    Paper,
    Box,
    CardContent,
    Typography
} from '@mui/material';

const Dashboard = () => {

    const tasks = useSelector(state => state.todo) // obtengo el total de las tareas
    const completedTasks = tasks.filter(task => task.completed); // obtengo cantidad de tareas completadas
    const pendingTasks = tasks.filter(task => !task.completed); // obtengo cantidad de tareas pendientes

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 10 }}>
                    <Box>
                        <Card sx={{ p: 2, backgroundColor: "#ABEBC6", textAlign: "center" }}>
                            <CardContent>
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 700
                                }}>Tareas Completadas: {completedTasks.length}/{tasks.length}</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ p: 2, backgroundColor: "#F5B7B1", textAlign: "center" }}>
                            <CardContent>
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 700
                                }}>Tareas Pendientes: {pendingTasks.length}/{tasks.length}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Paper>
            </Grid>
        </Grid >
    );
};

export default Dashboard;
