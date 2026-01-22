import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import remarkParse from "remark-parse"

export default class WRemarkParse extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            return processor.use(remarkParse)
        else
            return processor.use(remarkParse, options)
    }
}
