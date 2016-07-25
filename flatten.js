function flattArray(val) {
    return val instanceof Array ? [].concat.apply([], val.map(flattArray)) : val;
}