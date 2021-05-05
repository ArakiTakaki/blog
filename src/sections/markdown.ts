import {LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import styles from './githubMarkdown.proxy.css';
import marked from 'marked';
import { ResetCSS } from '../css';

@customElement("markdown-content")
export class MyElement extends LitElement {
  @property() content = "";
  static styles = [
    ResetCSS,
    styles,
  ];
  render() {
    console.log(this);
    return html`
      <div class="markdown-body">
        ${unsafeHTML(marked(this.content || ''))}
      </div>
    `;
  }
}
