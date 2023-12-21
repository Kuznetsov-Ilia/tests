
function zero() { return doOp(0, arguments) }
function one() { return doOp(1, arguments) }
function two() { return doOp(2, arguments) }
function three() { return doOp(3, arguments) }
function four() { return doOp(4, arguments) }
function five() { return doOp(5, arguments) }
function six() { return doOp(6, arguments) }
function seven() { return doOp(7, arguments) }
function eight() { return doOp(8, arguments) }
function nine() { return doOp(9, arguments) }

function doOp(a, args) {
    if (args.length === 0) return a;
    let [op, b] = args[0];
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '/':
            if (b === 0) throw new Error('division by zero');
            return Math.floor(a / b);
        case '*': return a * b;
        default:
            debugger;
            throw new Error('unknown op');
    }
}

function plus(num) { return ['+', num] }
function minus(num) { return ['-', num] }
function times(num) { return ['*', num] }
function dividedBy(num) { return ['/', num] }

console.log(eight(dividedBy(three()))); // 2