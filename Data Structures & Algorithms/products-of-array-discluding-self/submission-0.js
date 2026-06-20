class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefixes = Array(n);
        const suffixes = Array(n);
        const result = Array(n);

        prefixes[0] = 1;
        suffixes[n-1] = 1;

        for (let i = 1; i < n; i++) {
            prefixes[i] = nums[i-1] * prefixes[i-1];
        }

        for (let i = n - 2; i>= 0; i--) {
            suffixes[i] = nums[i+1] * suffixes[i+1];
        }

        for (let i=0; i<n; i++) {
            result[i] = prefixes[i] * suffixes[i];
        }

        return result;
    }
}
