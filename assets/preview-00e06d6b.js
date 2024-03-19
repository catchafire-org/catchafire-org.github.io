import { _ as __vitePreload } from "./iframe-2f763193.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var excludeTags = Object.entries(global.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-K4EAMTCU-138bbdf9.js"), true ? ["./DocsRenderer-K4EAMTCU-138bbdf9.js","./chunk-HLWAVYOI-954d167c.js","./iframe-2f763193.js","./index-3a0ba8e4.js","./_commonjsHelpers-ca272635.js","./index-26c70190.js","./get-586119b3.js","./index-1063ddb4.js","./index-eeefe080.js"] : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
