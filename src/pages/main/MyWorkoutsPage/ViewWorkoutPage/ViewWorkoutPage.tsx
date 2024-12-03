import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from '@hello-pangea/dnd';
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SnackbarCloseReason
} from '@mui/material';

import { getWorkoutById, getWorkoutExercises, setWorkoutExercises } from '../../../../api-services/workout-service';

import { Button, TextInput, SimpleSnackbar } from '../../../../components/common';

import { Exercise } from '../../../../common/types/exercise.types';
import { moveArrayElement } from '../../../../common/utils';

const initialExerciseEditing: Exercise = {
  id: 0,
  name: '',
  weight: '',
  repsPerSet: 0,
  sets: 0,
  restTime: 0,
  restTimeUnit: 's',
};

const ViewWorkoutPage = () => {
  const workoutId = +useParams().workoutId!;
  const navigate = useNavigate()

  if (!workoutId) return <p>An error has occurred, please click here to return: <Button onClick={() => navigate(-1)}>Go back</Button></p>

  const [displayedExercises, setDisplayedExercises] = useState<Exercise[]>([]);
  const [exerciseEditing, setExerciseEditing] = useState<Exercise>(initialExerciseEditing);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [exercisesErrorSnackbar, setExercisesErrorSnackbar] = useState<boolean>(false);

  const { data: workoutRes, isLoading: workoutLoading } = useQuery({
    queryKey: ['workout'],
    // We assert that workoutId will not be null because it's impossible to route to this page without it
    queryFn: () => getWorkoutById(workoutId),
  });

  const { data: workoutExercisesRes, isLoading: workoutExercisesLoading } = useQuery({
    queryKey: ['workoutExercises'],
    queryFn: () => fetchWorkoutExercises(),
  });

  const workoutExercisesMutation = useMutation({
    mutationFn: (data: { workoutId: number, reorderedExercises: Exercise[] }) => setWorkoutExercises(data.workoutId, data.reorderedExercises),
    onSuccess: (res) => {
      const {
        err,
        msg,
      } = res;

      if (err) {
        setExercisesErrorSnackbar(true);
      }
    },
  });

  const fetchWorkoutExercises = async () => {
    const res = await getWorkoutExercises(workoutId);
    setDisplayedExercises(res.data);
    return res;
  };

  if (workoutLoading || workoutExercisesLoading) return <CircularProgress />;

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setExerciseEditing(initialExerciseEditing);
  };

  const handleOpenEditDialog = (workout: Exercise) => {
    setExerciseEditing(workout);
    setEditDialogOpen(true);
  };

  const handleDragDrop = (event: DropResult) => {
    const { destination, source } = event;

    if (destination && source) {
      setDisplayedExercises((prevExercises) => {
        const reorderedExercises = moveArrayElement(prevExercises, source.index, destination.index);

        workoutExercisesMutation.mutate({ workoutId, reorderedExercises });

        return reorderedExercises
      });

    }
  };

  const handleExercisesEditedSnackbarClose = (
      event: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setExercisesErrorSnackbar(false);
    };

  const renderExerciseDraggable = (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
    return (
      <List className="pt-0" {...provided.droppableProps} ref={provided.innerRef}>
        {displayedExercises?.map((workout: Exercise, index: number) => {
          const { id, name, sets, repsPerSet, restTime, restTimeUnit } = workout;

          return (
            <Draggable key={id} draggableId={`${id}`} index={index}>
              {(provided, snapshot) => (
                <ListItem
                  component={Paper}
                  className="mb-2"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ListItemText>{name}</ListItemText>
                  <ListItemText>{sets} sets</ListItemText>
                  <ListItemText>{repsPerSet} reps</ListItemText>
                  <ListItemText>
                    {restTime}
                    {restTimeUnit} rest
                  </ListItemText>

                  <Button onClick={() => handleOpenEditDialog(workout)} variant="outlined">
                    Edit
                  </Button>
                </ListItem>
              )}
            </Draggable>
          );
        })}
        {provided.placeholder}
      </List>
    );
  };

  const renderWorkoutExercises = () => {
    const { data } = workoutExercisesRes!;

    if (!data.length) {
      return (
        <p>
          This workout doesn't have any exercises yet.{' '}
          <Link to="/" className="link">
            Click here
          </Link>{' '}
          to edit this workout and add some.
        </p>
      );
    } else {
      return (
        <DragDropContext onDragEnd={(e) => handleDragDrop(e)}>
          <Droppable droppableId="droppable">{renderExerciseDraggable}</Droppable>
        </DragDropContext>
      );
    }
  };

  const renderEditDialog = () => {
    return (
      <Dialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();

        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>Edit Exercise</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextInput
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Typography variant="h4" className="" gutterBottom>
        {workoutRes!.data.name}
      </Typography>

      <div className="flex flex-row justify-between w-full">
        <div className="w-1/2 mr-2">{renderWorkoutExercises()}</div>

        <div className="w-1/2">
          <TextInput variant="outlined" className="w-full" multiline minRows={4} label="Notes" />
        </div>
      </div>

      {renderEditDialog()}

      {/* Snackbar for reorder error */}
      <SimpleSnackbar 
        open={exercisesErrorSnackbar}
        autoHideDuration={5000}
        handleClose={handleExercisesEditedSnackbarClose}
        message="There was an error reordering exercises" />
    </div>
  );
};

export default ViewWorkoutPage;
