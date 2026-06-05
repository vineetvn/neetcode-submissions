class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        const numsMap = {};
        for (let i=0; i<n; i++) {
            // i+1 so that we can easily check for its
            // existance in next for loop
            numsMap[nums[i]] = i+1;
        }

        for (let i=0; i<n; i++) {
            if(numsMap[target - nums[i]]) {
                if(i === numsMap[target - nums[i]] - 1) {
                    continue;
                }
                return [i, numsMap[target - nums[i]] - 1];
            }
        }
    }
}
