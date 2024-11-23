import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchExercises, getMuscleGroups, getEquipment } from '../../../api-services/exercise-service';

import { MenuItem, InputLabel, Typography, FormControl, CircularProgress } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { Table, SelectInput } from '../../../components/common';

import { MuscleGroup, Equipment } from '../../../types/exercise.types';

const ExplorePage = () => {
  const [selectedMuscleGroupId, setSelectedMuscleGroupId] = useState<string>('0');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>('0');

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

  const { data: exerciseResults, isLoading: exercisesLoading } = useQuery({
    queryKey: ['exercises', selectedEquipmentId, selectedMuscleGroupId],
    queryFn: () => searchExercises(selectedEquipmentId, selectedMuscleGroupId),
  });

  // const fetchExerciseResults = async () => {
  //   const results = await refetch();

  //   console.log('RESULT', results);
  // };

  const handleMuscleGroupChange = async (event: SelectChangeEvent<any>) => {
    console.log('handleMuscleGroupChange', event.target.value);
    setSelectedMuscleGroupId(event.target.value);

    console.log('exerciseResults mg', exerciseResults);
  };

  const handleEquipmentChange = async (event: SelectChangeEvent<any>) => {
    console.log('handleEquipmentChange', event.target.value);
    setSelectedEquipmentId(event.target.value);

    console.log('exerciseResults eq', exerciseResults);
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

  const renderExercisesTable = () => {
    if (exercisesLoading) return <CircularProgress />;

    return <Table headers={[{ label: 'Name', key: 'name' }]} data={exerciseResults?.data} />;
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-2/4">
        <Typography variant="h4" className="mb-6">
          Explore
        </Typography>

        <Typography variant="body2" className="mb-6">
          Filter exercises by:
        </Typography>
        <div className="flex flex-row w-full mb-6">
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
              <MenuItem value={'0'}>Any</MenuItem>
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
              <MenuItem value={'0'}>Any</MenuItem>
              {renderEquipmentSelectItems()}
            </SelectInput>
          </FormControl>
        </div>

        {renderExercisesTable()}
      </div>
      {/* <Button onClick={fetchExerciseResults}>Search</Button> */}
    </div>
  );
};

export default ExplorePage;
