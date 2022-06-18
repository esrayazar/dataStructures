//Given an array, rotate the array to the right by k steps, where k is non-negative
const reverse = function (nums, start, end){
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start ++;
    end --
}

const rotate = function(nums, k){
    k = k% nums.length;
    reverse(nums, 0, nums.length-1);
    //start=0 end= k-1
    reverse(nums, 0, k-1);
    //start=k end =length-1
    reverse(nums,k, nums.length-1);
    return nums
}

rotate([1,2,3,4,5,6,7],6)