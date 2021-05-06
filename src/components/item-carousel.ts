import {LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("item-carousel")
export class ItemCarousel extends LitElement {
  @property() content = "";
  static styles =css`
:host {
  scroll-snap-align: var(--scroll-snap-align, center);
}`;

  render() {
    return html`
      <slot></slot>
    `;
  }
}
