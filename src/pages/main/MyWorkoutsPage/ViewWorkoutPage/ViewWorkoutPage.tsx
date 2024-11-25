import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getWorkoutById, getWorkoutExercises } from '../../../../api-services/workout-service';

import { Box, Typography, CircularProgress, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Button } from '../../../../components/common';

const ViewWorkoutPage = () => {
  const { workoutId } = useParams();

  const { data: workoutRes, isLoading: workoutLoading } = useQuery({
    queryKey: ['workout'],
    queryFn: () => getWorkoutById(+workoutId!),
  });

  const { data: workoutExercisesRes, isLoading: workoutExercisesLoading } = useQuery({
    queryKey: ['workoutExercises'],
    queryFn: () => getWorkoutExercises(+workoutId!),
  });

  if (workoutLoading || workoutExercisesLoading) return <CircularProgress />;

  console.log('workoutRes', workoutRes)
  console.log('workoutExercisesRes', workoutExercisesRes)

  return (
    <Box className="flex flex-col justify-center items-center">
      <Typography variant="h4" gutterBottom>
        {workoutRes.data.name}
      </Typography>
    </Box>
  );
};

export default ViewWorkoutPage;
