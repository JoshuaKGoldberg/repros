if (process.env.PROVIDE_STRUCTURED_CLONE) {
    globalThis.structuredClone = (value) => JSON.parse(JSON.stringify(value));
}

if (process.env.PROVIDE_IMMEDIATES) {
    globalThis.clearImmediate = clearTimeout;
    globalThis.setImmediate = setTimeout;
}
