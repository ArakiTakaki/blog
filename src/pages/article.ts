import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { asyncReplace } from 'lit/directives/async-replace.js';
import styles from './index.proxy.css';
import { ResetCSS } from '../css';
import '../sections/markdown';
const getArticlePath = (name: string) => `/articles/${name}.md`
async function *getArticle(name: string) {
  yield 'loading';
  const response = await fetch(getArticlePath(name));
  yield 'fetched';
  if (!response.ok) {
    yield '404 not found';
    return;
  }
  yield await response.text();
}

@customElement("my-article")
export class MyElement extends LitElement {
  static styles = [
    ResetCSS,
    styles,
  ];

  render() {
    return html`
      <div>
        <markdown-content content=${asyncReplace(getArticle('markdown234'))}></markdown-content>
      </div>
    `;
  }
};

