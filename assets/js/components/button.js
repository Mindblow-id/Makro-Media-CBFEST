class ButtonComponent extends HTMLElement {

    static get observedAttributes() {
        // Register all attributes that might be used on the button
        return [
            'id',
            'class',
            'style',
            'data-next',
            'data-previous',
            'disabled'
        ];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Get all possible attributes
        const id = this.getAttribute('id');
        const className = this.getAttribute('class') || '';
        const style = this.getAttribute('style') || '';
        const dataNext = this.getAttribute('data-next');
        const dataPrevious = this.getAttribute('data-previous');
        const disabled = this.hasAttribute('disabled');

        // Only include data-next and data-previous if not disabled
        const dataNextAttr = (!disabled && dataNext) ? `data-next="${dataNext}"` : '';
        const dataPreviousAttr = (!disabled && dataPrevious) ? `data-previous="${dataPrevious}"` : '';

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
            button:disabled {
                pointer-events: none;
                filter: grayscale(100%);
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
        <button
            ${id ? `id="${id}"` : ''}
            class="${className}"
            type="button"
            style="${style}"
            ${dataNextAttr}
            ${dataPreviousAttr}
            ${disabled ? 'disabled' : ''}
        >
            <img src="assets/img/Button.svg">
            <span class="text">
                <slot></slot>
            </span>
        </button>
        `;
    }

    connectedCallback() {
        // Ensure disabled state is reflected on first connect
        this.render();
    }
}

customElements.define("c-button", ButtonComponent);
