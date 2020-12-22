import getDir from '/modules/getDir.js';
import load from '/modules/loader.js';

customElements.define('liquid-menu', class extends HTMLElement {
    path = getDir(import.meta.url)
    template = load(this.path, 'template.html')
    styles = load(this.path, 'styles.css').then(styles => `<style>${styles}</style>`)

    async connectedCallback() {
        this.attachShadow({mode: "open"}).innerHTML = await this.template + await this.styles;
        this.classList.toggle('loading', false);
        this.shadowRoot.querySelector('.toggleMenu').addEventListener('click', () => this.classList.toggle('open'))
    }
})
