import loadable from "@loadable/component"

const CUSTOM_BLOCKS = {
  BlockOne: loadable(() => import("./block-one")),
}
export default CUSTOM_BLOCKS
