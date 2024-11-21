import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchExercises, getMuscleGroups, getEquipment } from '../../../api-services/ExerciseService';

import { MenuItem, InputLabel, Typography, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { Button, SelectInput } from '../../../components/common';

import { MuscleGroup, Equipment } from '../../../types/exercise.types';

const ExplorePage = () => {
  const [selectedMuscleGroupId, setSelectedMuscleGroupId] = useState<string>('');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>('');

  const {
    data: muscleGroupsRes,
    isLoading: muscleGroupsLoading,
    isError: getMuscleGroupsError,
  } = useQuery({
    queryKey: ['muscleGroup'],
    queryFn: getMuscleGroups,
  });

  const {
    data: equipmentRes,
    isLoading: equipmentLoading,
    isError: getEquipmentError,
  } = useQuery({
    queryKey: ['equipment'],
    queryFn: getEquipment,
  });

  const {
    data,
    refetch: fetchExerciseResults,
    isRefetching,
  } = useQuery({
    queryKey: ['exercises'],
    enabled: false,
    queryFn: () => searchExercises(+selectedEquipmentId, +selectedMuscleGroupId),
  });

  // const fetchExerciseResults = async () => {
  //   const results = await refetch();

  //   console.log('RESULT', results);
  // };

  const handleMuscleGroupChange = async (event: SelectChangeEvent<any>) => {
    setSelectedMuscleGroupId(event.target.value);
    await fetchExerciseResults();
  };

  const handleEquipmentChange = async (event: SelectChangeEvent<any>) => {
    setSelectedEquipmentId(event.target.value);
    await fetchExerciseResults();
  };

  const renderMuscleGroupSelectItems = () => {
    return muscleGroupsRes?.data.map((muscleGroup: MuscleGroup) => {
      const { id, label } = muscleGroup;

      return (
        <MenuItem value={id} key={`${label}`}>
          {label}
        </MenuItem>
      );
    });
  };

  const renderEquipmentSelectItems = () => {
    return equipmentRes?.data.map((equipment: Equipment) => {
      const { id, label } = equipment;

      return (
        <MenuItem value={id} key={`${label}`}>
          {label}
        </MenuItem>
      );
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-2/4">
        <Typography variant="h4" className="mb-4">
          Explore
        </Typography>

        <div className="flex flex-row w-full">
          <FormControl fullWidth className="mx-1">
            <InputLabel id="muscle-group-select-label">Muscle Group</InputLabel>
            <SelectInput
              variant="outlined"
              value={selectedMuscleGroupId}
              label="Muscle Group"
              labelId="muscle-group-select-label"
              id="muscle-group-select"
              onChange={handleMuscleGroupChange}
            >
              {renderMuscleGroupSelectItems()}
            </SelectInput>
          </FormControl>

          <FormControl fullWidth className="mx-1">
            <InputLabel id="equipment-select-label">Equipment</InputLabel>
            <SelectInput
              variant="outlined"
              value={selectedEquipmentId}
              label="Equipment"
              labelId="equipment-select-label"
              id="equipment-select"
              onChange={handleEquipmentChange}
            >
              {renderEquipmentSelectItems()}
            </SelectInput>
          </FormControl>
        </div>
      </div>
      {/* <Button onClick={fetchExerciseResults}>Search</Button> */}
    </div>
  );
};

export default ExplorePage;
