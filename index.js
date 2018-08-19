function produceDrivingRange(range){
  return function(start, end){
    const distance = Math.abs(parseInt(end) - parseInt(start));
    const range_diff = Math.abs(range - distance);
    return range_diff >= distance ? `Within range by ${range_diff}` : `${range_diff} blocks out of range`;
  };
};
