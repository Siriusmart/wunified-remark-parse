import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import remarkParse from "remark-parse"

export default class WRemarkParse extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            processor = processor.use(remarkParse)
        else
            processor = processor.use(remarkParse, options)

        if (options.snapshot === true)
            /// tree is an hast.Root
            processor.apply(() => (tree: any) => {
                this.result.ast = structuredClone(tree)
            })

        return processor;
    }
}
