class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let m = strs.length
        const strMap = {}
        for (let i=0; i<m; i++) {
            const charArray = new Array(26).fill(0)
            for(let j=0; j<strs[i].length; j++) {
                charArray[strs[i][j].charCodeAt(0) - 97] += 1
            }
            
            if(strMap[charArray]) {
                strMap[charArray].push(strs[i])
            }else {
                strMap[charArray] = [strs[i]]
            }

        }

        return Object.values(strMap)
    }
}
