import {LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './content-carousel.proxy.css';
import { ResetCSS } from '../css';

@customElement("content-carousel")
export class ContentCarousel extends LitElement {
  @property() content = "";
  static styles = [
    ResetCSS,
    styles,
  ];

  render() {
    return html`
      <div class="carousel-wrap">
        <slot class="carousel"></slot>
      <div>
    `;
  }
}
