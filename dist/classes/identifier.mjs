export default function idGen(prefix) {
    if (prefix === void 0) { prefix = ''; }
    return "".concat(prefix, "-").concat(Math.random().toString(36).substring(0, 15));
}
//# sourceMappingURL=identifier.mjs.map