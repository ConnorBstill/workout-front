export const moveArrayElement = <Type>(data: Type[], fromIndex: number, toIndex: number): Type[] => {
  let reorderedArray: Type[] = [...data];

  reorderedArray.splice(fromIndex, 1);
  reorderedArray.splice(toIndex, 0, data[fromIndex]);

  return reorderedArray;
};
