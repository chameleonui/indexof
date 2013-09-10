module.exports = function(arr, obj){
    if (!obj) {
        obj = arr;
        if (!obj.parentNode) return -1;
        arr = obj.parentNode.children;
    }
    var len = arr.length;
    if (arr.indexof) return arr.indexof(obj);
    for (var i = 0; i < len; ++i) {
        if (obj == arr[i]) return i;
    }
    return -1;
};
