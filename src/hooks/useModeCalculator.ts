const useModeCalculator = (data: any) => {
  let mode: number | undefined = undefined;
  let maxCount = 0;

  for (const key in data) {
    const count = data[key];
    const num = Number(key);

    if (count > maxCount) {
      mode = num;
      maxCount = count;
    } else if (mode && count === maxCount && num < mode) {
      // updating mode if a smaller number comes with same count
      mode = num;
    } 
  }

  return mode?.toFixed(3);
}

export default useModeCalculator