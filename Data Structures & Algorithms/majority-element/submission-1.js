class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let numsMap = new Map();
        let majorityCount = 0;
        let majorityElement = 0;

        for(let num of nums) {
            numsMap.set(num, (numsMap.get(num) || 0) + 1);

            if(numsMap.get(num) > majorityCount) {
                majorityCount = numsMap.get(num);
                majorityElement = num;
            }
        }       

        return majorityElement;
    }
}
