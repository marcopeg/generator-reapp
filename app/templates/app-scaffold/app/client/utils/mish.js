
export function __noop() {
    console.log('__noop', Date.now());
}

__noop.named = function (name) {
    return () => {
        console.log('__noop (' + name + ')', Date.now());
    };
};
