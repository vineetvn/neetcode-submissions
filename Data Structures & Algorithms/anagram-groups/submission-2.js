class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Map from canonical key -> list of words sharing that key.
        // Anagrams have identical letter counts, so same key = same group.
        const strMap = {};

        for (const str of strs) {
            // Count occurrences of each lowercase letter (a-z = 26 slots).
            const count = new Array(26).fill(0);
            for (const ch of str) {
                // 'a'.charCodeAt(0) is 97, so subtracting 97 maps a->0 ... z->25.
                count[ch.charCodeAt(0) - 97] += 1;
            }

            // Build an explicit string key, e.g. [1,0,2] -> "1#0#2#...".
            // Use join instead of the raw array: relying on implicit
            // array->string coercion is fragile; '#' avoids collisions.
            const key = count.join('#');

            // ??= creates the array on first sight of this key, then we push.
            // Collapses the old if/else (exists? push : create) into one line.
            (strMap[key] ??= []).push(str);
        }

        // Values of the map = the grouped anagrams.
        return Object.values(strMap);
    }
}
