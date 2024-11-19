import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchExercises, getMuscleGroups } from '../../../api-services/ExerciseService';

import { MenuItem, InputLabel, Typography } from '@mui/material';

import { Button, Select } from '../../../components/common';

import { MuscleGroup } from '../../../types/exercise.types';

const ExplorePage = () => {
  const [selectedMuscleGroupId, setSelectedMuscleGroupId] = useState<number>(1);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<number>(2);
  const [exerciseResults, setExerciseResults] = useState<any[]>([]);

  // const { data: muscleGroups } = useQuery()
  const { data: muscleGroupsRes, isLoading, isError } = useQuery({ 
    queryKey: ['muscleGroup'], 
    queryFn: getMuscleGroups 
  });

  const { data, refetch, isRefetching } = useQuery({
    queryKey: ['exercises'],
    enabled: false,
    queryFn: () => searchExercises(selectedEquipmentId, selectedMuscleGroupId),
  });

  const fetchExerciseResults = async () => {
    const results = await refetch();

    console.log('RESULT', results);
  };

  const handleMuscleGroupChange = () => {

  }

  const renderMuscleGroupsItems = () => {
    return muscleGroupsRes?.data.map((muscleGroup: MuscleGroup) => {
      const { id, label } = muscleGroup;

      return <MenuItem value={id} key={`${label}`}>{label}</MenuItem>
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-2/4">
        <Typography variant="h4">Explore</Typography>
        <InputLabel id="demo-simple-select-label">Muscle Groups</InputLabel>
        <Select
          variant="outlined"
          value={selectedMuscleGroupId}
          label="Muscle Group"
          onChange={handleMuscleGroupChange}
        >
          {renderMuscleGroupsItems()}
        </Select>
      </div>
      {/* <Button onClick={fetchExerciseResults}>Search</Button> */}
    </div>
  );
};

export default ExplorePage;
