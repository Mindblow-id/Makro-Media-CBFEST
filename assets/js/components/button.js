class ButtonComponent extends HTMLElement {

    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        let style = this.getAttribute('style') || '';
        let dataNext = this.getAttribute('data-next');
        let dataPrevious = this.getAttribute('data-next');
        let className = this.getAttribute('class') || '';
        

        this.shadowRoot.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            button {
                position: relative;
                background: transparent;
                padding: 0;
                border: none;
                display: inline-block;
                width: 100%; /* button width from parent or inline style */
                height: fit-content;
            }
            img {
                display: block;
                width: 100%;  /* scale to button width */
                height: auto; /* keep aspect ratio */
            }
            .text {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none; /* so click still goes to button */
            }
        </style>

        <button class="${className}" type="button" style="${style}" ${dataNext && `data-next="${dataNext}"`} ${dataPrevious && `data-previous="${dataPrevious}"`}>
            <img src="assets/img/Button.svg">
            <span class="text">
                <slot></slot>
            </span>
        </button>
        `;
    }
}

customElements.define("c-button", ButtonComponent);
