class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['style', 'card-style', 'bg-gradient', 'content-style', 'class', 'data-next', 'data-previous'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        let style = this.getAttribute('style') || '';
        let cardStyle = this.getAttribute('card-style') || '';
        let bgGradient = this.getAttribute('bg-gradient');
        let styleContent = this.getAttribute('content-style') || '';
        let className = this.getAttribute('class') || '';
        let dataNext = this.getAttribute('data-next');
        let dataPrevious = this.getAttribute('data-previous');

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
            }
            .container {
                height: 100%;        
                width: 100%;
                position: relative;
                
            }
            .card {
                height: 100%;
                width: 100%;
                display: inline-block;
                position: relative;
                border: 4px solid transparent; /* placeholder for gradient border */
                border-radius: 20px;
                background: linear-gradient(90deg, #B48235, #F8EE9A, #B48235, #B48235, #F8EE9A, #B48235) border-box;
                ${!bgGradient ? `
                -webkit-mask: 
                  linear-gradient(#fff 0 0) padding-box, 
                  linear-gradient(#fff 0 0);
                -webkit-mask-composite: destination-out;
                mask-composite: exclude;
                ` : ''} 
                z-index: 1;
            }
            .card-content {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 5;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .backdrop {
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 12px;
                z-index: 3;
                background: rgba(0, 0, 0, 0.3);
                top: 4px;
                left: 4px;
            }
        </style>
        <div style="${style}" class="container ${className}">  
            <div style="${cardStyle}" class="card"  ${dataNext ? `data-next="${dataNext}"` : ''} ${dataPrevious ? `data-previous="${dataPrevious}"` : ''}>
            </div>

    ${!bgGradient ? `
    <div class="backdrop">
    </div>
    ` : ''}
            <div class="card-content" style="${styleContent}">
                <slot></slot>
            </div>
        </div>
        `;
    }
}

customElements.define("c-card", CardComponent);
