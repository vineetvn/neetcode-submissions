class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let c of s) {
            if (c === "{" || c === "(" || c === "[") {
                stack.push(c)
            }
            else {
                if (!stack.length) return false

                let top = stack.pop()

                if (c === "}" && top !== "{") return false
                if (c === ")" && top !== "(") return false
                if (c === "]" && top !== "[") return false
            }
        }

        return !stack.length
    }
}
