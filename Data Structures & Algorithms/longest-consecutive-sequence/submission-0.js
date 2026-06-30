class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set();

        for (let num of nums) {
            numSet.add(num)
        }
        
        let longest = 0;
        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length += 1;
                }
                longest =Math.max(longest , length);
            }
        }

        return longest;
    }
}
