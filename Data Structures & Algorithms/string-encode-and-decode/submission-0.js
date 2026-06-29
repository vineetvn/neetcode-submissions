class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';

        let encodedString = "";
        for (let str of strs) {
            let strLength = str.length
            encodedString += `${strLength}#` + str
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j += 1
            }
            let strLength = parseInt(str.substring(i,j), 10);
            res.push(str.substring(j + 1, j + 1 + strLength))
            i = j + 1 + strLength
        }

        return res
    }
}
