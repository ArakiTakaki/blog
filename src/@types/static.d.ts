declare module "*.css";
declare module "*.md";
declare module "*.wasm";

interface CSSStyleSheet {
  replace(text: string): Promise<CSSStyleSheet>;
  replaceSync(text: string): void;
}

interface Document {
  adoptedStyleSheets: readonly CSSStyleSheet[];
}

interface ShadowRoot {
  adoptedStyleSheets: readonly CSSStyleSheet[];
}
