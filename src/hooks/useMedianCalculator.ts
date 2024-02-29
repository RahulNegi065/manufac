const useMedianCalculator = (list:number[]) => {
    list.sort((a:number, b:number) => a - b);
    const middle = Math.floor(list.length / 2);
    if (list.length % 2 === 0) {
        return ((list[middle - 1] + list[middle]) / 2).toFixed(3);
    } else {
        return list[middle].toFixed(3);
    }
}

export default useMedianCalculator