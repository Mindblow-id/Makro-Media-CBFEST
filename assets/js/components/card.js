class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        let style = this.getAttribute('style') || '';
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
                border-radius: 12px;
                background: linear-gradient(90deg, #f39f86, #d4af37, #f39f86, #d4af37, #f39f86) border-box; 
                -webkit-mask: 
                  linear-gradient(#fff 0 0) padding-box, 
                  linear-gradient(#fff 0 0);
                -webkit-mask-composite: destination-out;
                mask-composite: exclude;
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
            <div class="card"  ${dataNext ? `data-next="${dataNext}"` : ''} ${dataPrevious ? `data-previous="${dataPrevious}"` : ''}>
            </div>

            <div class="backdrop">
            </div>
            <div class="card-content">
                <slot></slot>
            </div>
        </div>
        `;
    }
}

customElements.define("c-card", CardComponent);
