const useMeanCalculator = (list:number[]) => {
    const sum = list.reduce((sum:number, val:number) => sum +  val, 0);
    return (sum / list.length).toFixed(3);
}

export default useMeanCalculator