class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let evalStack = [];
        for (let c of tokens) {
            if (c === "+") {
                evalStack.push(evalStack.pop() + evalStack.pop());
            }
            else if (c === "*") {
                evalStack.push(evalStack.pop() * evalStack.pop());
            }
            else if (c === "-") {
                let a = evalStack.pop();
                let b = evalStack.pop();
                evalStack.push(b - a);
            }
            else if (c === "/") {
                let a = evalStack.pop();
                let b = evalStack.pop();
                evalStack.push(Math.trunc(b / a));
            } else {
                evalStack.push(parseInt(c))
            }
        }

        return evalStack.pop();
    }
}
