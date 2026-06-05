class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let n = strs[0].length;
        let commonPrefix = "";
        for (let i = 0; i < n; i++) {
            let ithChar = strs[0][i];
            for (let str of strs) {
                console.log(str[i], ithChar)
                if(str[i] == ithChar) {
                    continue
                }else {
                    ithChar = ""
                    break;
                }
            }
            if(ithChar == "") {
                break;
            }
            commonPrefix += ithChar;
        }
        return commonPrefix;
    }
}
