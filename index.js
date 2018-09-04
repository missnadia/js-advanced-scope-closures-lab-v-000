function produceDrivingRange (blockRange) {
  return function (startBlock, endBlock) {
    let startEndBlock = Math.abs(parseInt(startBlock) - parseInt(endBlock));
    let difference = Math.abs(startEndBlock - blockRange);
    if (startEndBlock > blockRange) {
      return `${difference} blocks out of range`;
    } else {
      return `within range by ${difference}`;
    }
  }
}
