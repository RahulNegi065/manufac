const useModeCalculator = (data:any) => {
    let highest = null;
    for (const key in data) {
        const value = data[key];
        if (typeof value === 'number') {
          if (highest === null || value > highest) {
            highest = value;
          }
        }
    }
    return highest?.toFixed(3);
}

export default useModeCalculator