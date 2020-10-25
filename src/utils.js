export const arrayChunk = (arr, elPerChunk) => {
    const result = [];
    let chunk = [];
    for (let i = 0; i < arr.length; i++) {
      if (chunk.length < elPerChunk) {
        //fll chunk array
        chunk.push(arr[i]);
        //check is last elem
        if (!arr[i + 1]) {
          result.push(chunk);
        }
      }
      //push to result array
      if (chunk.length === elPerChunk) {
        result.push(chunk);
        chunk = [];
      }
    }
    return result;
  };