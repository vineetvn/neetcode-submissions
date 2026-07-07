class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    isArrayEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }

        return true;
    }

    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        for (let i=0; i<s1.length; i++) {
            s1Count[s1[i].charCodeAt(0) - 97]++;
            s2Count[s2[i].charCodeAt(0) - 97]++;
        }

        if(this.isArrayEqual(s1Count, s2Count)) return true;

        for (let right = s1.length; right < s2.length; right++) {
            s2Count[s2[right].charCodeAt(0) - 97]++;
            s2Count[s2[right - s1.length].charCodeAt(0) - 97]--;

            if(this.isArrayEqual(s1Count, s2Count)) return true;
        }

        return false;
    }
}
