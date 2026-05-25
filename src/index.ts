import remarkParse from "remark-parse"
import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"

export default class WRemarkParse extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            return processor.use(remarkParse)
        else
            return processor.use(remarkParse, options)
    }
}
