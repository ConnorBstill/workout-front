import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchExercises } from '../../../api-services/ExerciseService';

import { Button } from '../../../components/common';

const ExplorePage = () => {
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<number>(2);
  const [selectedMuscleGroupId, setSelectedMuscleGroupId] = useState<number>(1);
  const [exerciseResults, setExerciseResults] = useState<any[]>([]);

  const { data, refetch, isRefetching } = useQuery({
    queryKey: ['exercises'],
    enabled: false,
    queryFn: () => searchExercises(selectedEquipmentId, selectedMuscleGroupId),
  });

  const fetchExerciseResults = async () => {
    const results = await refetch();

    console.log('RESULT', results);
  };

  return (
    <div>
      explore!
      <Button onClick={fetchExerciseResults}>Search</Button>
    </div>
  );
};

export default ExplorePage;
