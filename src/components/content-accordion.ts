import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ref, createRef} from 'lit/directives/ref.js';
import styles from './content-accordion.proxy.css';
import {classMap} from 'lit/directives/class-map.js';

// TODO openedがバグる
@customElement("content-accordion")
export class ContentAccordion extends LitElement {

  private refContent = createRef<HTMLDivElement>();
  accordionHeight = 0;
  isInitialized = false;
  @property({ type: Boolean }) opened = false;
  @property({ type: Boolean }) disabled = false;

  static styles = [
    styles,
    // ResetCSS,
  ];

  constructor() {
    super();
  }

  updated() {
    if (this.refContent.value == null) return;
    this.accordionHeight = this.refContent.value.scrollHeight;
    if (this.opened) {
      this.refContent.value.style.height = `${this.accordionHeight}px`;
    } else {
      this.refContent.value.style.height = '0px'
    }
  }

  changeState() {
    if (this.disabled) return;
    this.opened = !this.opened;
  }

  transitionEnd() {
    // if (this.refContent.value == null) return;
    // if (this.opened) {
    //   this.refContent.value.style.display = 'none';
    // } else {
    //   this.refContent.value.style.display = 'none';
    // }
  }

  render() {
    const classes = {
      base: true,
      open: this.opened,
      close: !this.opened,
    };

    return html`
<slot name="title" @click=${this.changeState}></slot>
<div ref=${ref(this.refContent)} class=${classMap(classes)} @transitionend=${this.transitionEnd}>
  <slot name="content"></slot>
</div>
`;
  }
}
