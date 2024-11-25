import { useQuery } from '@tanstack/react-query';
import { useNavigate, Outlet } from 'react-router-dom';

import { getWorkouts } from '../../../api-services/workout-service';

import { Box, Typography, CircularProgress, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Button } from '../../../components/common';

const MyWorkoutsPage = () => {
  const navigate = useNavigate();

  const { data: workoutsRes, isLoading: workoutsLoading } = useQuery({
    queryKey: ['workouts'],
    queryFn: getWorkouts,
  });

  const renderWorkouts = () => {
    return workoutsRes?.data.map((workout) => (
      <ListItem component={Paper} className="flex justify-between h-28 sm:h-16 mb-3" key={workout.id}>
        <ListItemText className="w-1/2" primary={workout.name} />
        <div className="flex flex-col sm:flex-row justify-end">
          <Button onClick={() => navigate(`/main/my-workouts/${workout.id}`)} className="w-full sm:w-2/4 mr-2 mb-1 sm:mb-0" variant="outlined">
            View
          </Button>

          <Button className="w-full sm:w-2/4" variant="contained">
            Start
          </Button>
        </div>
      </ListItem>
    ));
  };

  return (
    <Box className="flex flex-col justify-center items-center">
      <Typography variant="h4" gutterBottom>
        Workouts
      </Typography>

      {workoutsLoading && <CircularProgress />}

      {workoutsRes && (
        <List
          sx={{
            width: '60%',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {renderWorkouts()}
        </List>
      )}

      <Outlet />
    </Box>
  );
};

export default MyWorkoutsPage;
