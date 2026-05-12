"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wp_unified_1 = require("wp-unified");
const remark_parse_1 = __importDefault(require("remark-parse"));
class WRemarkParse extends wp_unified_1.WUnifiedPlugin {
    apply(processor, options) {
        let res;
        if (options === undefined)
            res = processor.use(remark_parse_1.default);
        else
            res = processor.use(remark_parse_1.default, options);
        if (options.snapshot === true)
            /// tree is an hast.Root
            processor.apply(() => (tree) => {
                this.result.ast = structuredClone(tree);
            });
        return res;
    }
}
exports.default = WRemarkParse;
//# sourceMappingURL=index.js.map