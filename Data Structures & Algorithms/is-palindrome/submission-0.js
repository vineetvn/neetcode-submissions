class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if(!this.isAlphanumeric(s[i])) {
                i++;
                continue;
            }

            if(!this.isAlphanumeric(s[j])) {
                j--;
                continue;
            }

            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i += 1;
            j -= 1;
        }

        return true;
    }
}
