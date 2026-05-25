import remarkParse from "remark-parse";
import { WUnifiedPlugin } from "wp-unified";
export default class WRemarkParse extends WUnifiedPlugin {
    apply(processor, options) {
        if (options === undefined)
            return processor.use(remarkParse);
        else
            return processor.use(remarkParse, options);
    }
}
//# sourceMappingURL=index.js.map