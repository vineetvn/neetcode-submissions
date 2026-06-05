class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        char_map_s = {}
        char_map_t = {}
        
        for i in range(len(s)):
            char_map_s[s[i]] = 1 + char_map_s.get(s[i], 0)
            char_map_t[t[i]] = 1 + char_map_t.get(t[i], 0)

        for char in char_map_s:
            if char_map_s[char] != char_map_t.get(char, 0):
                return False

        return True