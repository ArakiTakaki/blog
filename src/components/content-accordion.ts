import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ref, createRef} from 'lit/directives/ref.js';
import styles from './content-accordion.proxy.css';
import {classMap} from 'lit/directives/class-map.js';

// TODO openedがバグる
@customElement("content-accordion")
export class ContentAccordion extends LitElement {

  private refContent = createRef<HTMLDivElement>();
  private mutation: MutationObserver | null = null;
  accordionHeight = 0;
  isInitialized = false;
  isLoaded = false;
  @property({ type: Boolean }) opened = false;
  @property({ type: Boolean }) disabled = false;

  static styles = [
    styles,
  ];

  constructor() {
    super();
  }

  updated() {
    if (this.refContent.value == null) return;
    const elTarget = this.refContent.value;

    if (this.mutation == null) {
      this.mutation = new MutationObserver(() => {
        this.elementStyleUpdate();
      });

      this.mutation.observe(elTarget, { attributes: true, childList: true, subtree: true });

      const classes = elTarget.classList.values();
      for (let classItem of classes) {
        if (classItem === 'animation') return;
      }

      elTarget.classList.add('animation');
    }
  }
  elementStyleUpdate() {
    if (this.refContent.value == null) return;
    const elTarget = this.refContent.value;
    this.accordionHeight = this.refContent.value.scrollHeight;
    if (this.opened) {
      elTarget.style.height = `${this.accordionHeight}px`;
    } else {
      elTarget.style.height = '0px'
    }
  }

  changeState() {
    if (this.disabled) return;
    this.opened = !this.opened;
  }

  render() {
    const classes = {
      base: true,
      open: this.opened,
      close: !this.opened,
    };

    return html`
<slot name="title" @click=${this.changeState}></slot>
<div ref=${ref(this.refContent)} class=${classMap(classes)}>
  <slot name="content"></slot>
</div>
`;
  }
}
