class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let min = this.minStack.length === 0 ? 
        val : 
        Math.min(val, this.minStack[this.minStack.length - 1]);

        this.minStack.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return "Underflow";
        this.minStack.pop();
        return this.stack.pop();  
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
}
