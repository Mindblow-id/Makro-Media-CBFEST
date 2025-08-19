const homeData = {
  id: 'home',
  data: `
  <home-page> </home-page>
  `
}


class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="flex flex-col max-w-80 justify-center items-center mx-auto gap-8 pt-[40vh]"
      >
        <c-button class="w-[600px]" data-next="lk-profile">
          <p class="text-button text-5xl  mx-12">Central Banking Services</p>
        </c-button>
        <c-button class="w-[600px]" data-next="home">
          <p class="text-button text-5xl  mx-12">Treasury Operational Services</p>
        </c-button>
        <c-button class="w-[600px]" data-next="home">
          <p class="text-button text-5xl  mx-12">Integrated Licensing</p>
        </c-button>
        <c-button class="w-[600px]" data-next="home">
          <p class="text-button text-5xl  mx-12">Quiz</p>
        </c-button>
        
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);