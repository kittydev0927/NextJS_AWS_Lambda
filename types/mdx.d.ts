declare module '*.mdx' {
  let MDXComponent: () => JSX.Element;
  export default MDXComponent;
}
/// <reference types="@mdx-js/loader" />
