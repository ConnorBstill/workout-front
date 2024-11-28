import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
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
} from '@mui/material';

import { getWorkoutById, getWorkoutExercises } from '../../../../api-services/workout-service';

import { Button, TextInput } from '../../../../components/common';

import { Exercise } from '../../../../types/exercise.types';

const initialExerciseEditing: Exercise = {
  id: 0,
  name: '',
  weight: '',
  repsPerSet: 0,
  sets: 0,
  restTime: 0,
  restTimeUnit: 's',
}

const ViewWorkoutPage = () => {
  const { workoutId } = useParams();

  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [exerciseEditing, setExerciseEditing] = useState<Exercise>(initialExerciseEditing);

  const { data: workoutRes, isLoading: workoutLoading } = useQuery({
    queryKey: ['workout'],
    queryFn: () => getWorkoutById(+workoutId!),
  });

  const { data: workoutExercisesRes, isLoading: workoutExercisesLoading } = useQuery({
    queryKey: ['workoutExercises'],
    queryFn: () => getWorkoutExercises(+workoutId!),
  });

  if (workoutLoading || workoutExercisesLoading) return <CircularProgress />;

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setExerciseEditing(initialExerciseEditing);
  }

  const handleOpenEditDialog = (workout: Exercise) => {
    setExerciseEditing(workout);
    setEditDialogOpen(true);
  }

  const renderExerciseDraggable = (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
    return (
      <List className="pt-0" {...provided.droppableProps} ref={provided.innerRef}>
        {workoutExercisesRes?.data.map((workout: Exercise, index: number) => {
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

                  <Button onClick={() => handleOpenEditDialog(workout)} variant="outlined">Edit</Button>
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
        <DragDropContext onDragEnd={(e) => console.log('DRAG END', e)}>
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
    )
  }

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
    </div>
  );
};

export default ViewWorkoutPage;
