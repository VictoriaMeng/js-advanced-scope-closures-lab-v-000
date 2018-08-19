function produceDrivingRange(range){
  return function(start, end){
    const diff = end - start;
    return diff >= 0 ? `Within range by ${diff}` : `${diff} blocks out of range`;
  };
};
