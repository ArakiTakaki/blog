import {LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import styles from './github-markdown.proxy.css';
import marked from 'marked';
import { ResetCSS } from '../css';

@customElement("content-markdown")
export class MyElement extends LitElement {
  @property() content = "";
  static styles = [
    ResetCSS,
    styles,
  ];
  render() {
    return html`
      <div class="markdown-body">
        ${unsafeHTML(marked(this.content || ''))}
      </div>
    `;
  }
}
