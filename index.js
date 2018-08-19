function produceDrivingRange(range){
  return function(target){
    const diff = range - target;
    return diff >= 0 ? `Within range by ${diff}` : `${diff} blocks out of range`;
  }
}
