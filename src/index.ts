import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import remarkParse from "remark-parse"

export default class WRemarkParse extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        let res: UntypedProcessor;

        if (options === undefined)
            res = processor.use(remarkParse)
        else
            res = processor.use(remarkParse, options)

        if (options.snapshot === true)
            /// tree is an hast.Root
            processor.apply(() => (tree: any) => {
                this.result.ast = structuredClone(tree)
            })

        return res;
    }
}
