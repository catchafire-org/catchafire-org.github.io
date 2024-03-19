import { _ as __vitePreload } from "./iframe-2f763193.js";
import { f as reactDomExports, R as React, r as reactExports, g as CodeOrSourceMdx, A as AnchorMdx, H as HeadersMdx, D as Docs } from "./index-3a0ba8e4.js";
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
var nodes = /* @__PURE__ */ new Map(), WithCallback = ({ callback, children }) => {
  let once = reactExports.useRef();
  return reactExports.useLayoutEffect(() => {
    once.current !== callback && (once.current = callback, callback());
  }, [callback]), children;
}, renderElement = async (node, el) => {
  let root = await getReactRoot(el);
  return new Promise((resolve) => {
    root.render(React.createElement(WithCallback, { callback: () => resolve(null) }, node));
  });
}, unmountElement = (el, shouldUseNewRootApi) => {
  let root = nodes.get(el);
  root && (root.unmount(), nodes.delete(el));
}, getReactRoot = async (el) => {
  let root = nodes.get(el);
  return root || (root = client.createRoot(el), nodes.set(el, root)), root;
};
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : React.createElement(React.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(() => import("./index-38a6a6c3.js"), true ? ["./index-38a6a6c3.js","./index-be3ad3a0.js","./index-3a0ba8e4.js","./iframe-2f763193.js","./_commonjsHelpers-ca272635.js","./index-26c70190.js","./get-586119b3.js","./index-1063ddb4.js","./index-eeefe080.js"] : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer as D,
  defaultComponents as d
};
