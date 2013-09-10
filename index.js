module.exports = function(arr, item){
    if (!item) {
        item = arr;
        if (!item.parentNode) return -1;
        arr = item.parentNode.children;
    }
    var len = arr.length;
    if (arr.indexof) return arr.indexof(item);
    for (var i = 0; i < len; ++i) {
        if (item == arr[i]) return i;
    }
    return -1;
};
