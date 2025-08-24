const GM = {
  id: "GM",
  data: `
    <div class="flex justify-between mx-auto w-full px-14 items-center absolute top-40"> 
      <c-button
        class="text-lg  xl:top-56 left-14 xl:left-20 w-60"
        data-previous="home"
      >
        <p class="text-button text-xl flex justify-center items-center gap-2">
          <img src="assets/img/arrow-left-gold.svg" class="w-8" >
          Back to Home
        </p>
      </c-button>
      <h2
        class="xl:top-56 right-12 xl:right-18 text-4xl xl:Atext-5xl text-white"
      >
        Treasury Operational Services
      </h2>
    </div>

    <div class="pt-80 container mx-14 w-[968px]">
      <h3 class="text-5xl title w-fit mx-auto uppercase text-center">
        Gold Management
      </h3>
      
      <div class="flex flex-row gap-8">
        <img class="w-1/3 h-fit"  src="assets/img/GM/GM.png">
        <c-card class="w-full h-[724px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
          <div class="mx-12 mt-8">
              <p class="Arial text-2xl">
              Medali Emas Dipanegara (MED) is the first gold coin minted by the Indonesian government. What makes MED unique is that it does not have a nominal value inscribed on either side of the coin.
              </p>
              <p class="Arial text-2xl mt-12">
              MED has a diameter of 28 mm, weighs 15 grams, and is made of 22-carat gold. One side of the coin features the image of Prince Dipanegara, one of the earliest figures recognized by the Indonesian government as a national hero.
              </p>
              <p class="Arial text-2xl mt-12">
              Prince Dipanegara was a prominent figure from the Yogyakarta Sultanate who lived from the late 18th century to the mid-19th century. In addition to the image of Dipanegara and the word "DIPANEGARA," there is also an inscription of Dipanegara's name in Arabic-Javanese script.
              </p>
          </div>
        </c-card>
      </div>
     <div class="flex justify-between items-center w-full mt-12"> 
          <c-button data-previous="treasury-profile" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <img src="assets/img/arrow-left-gold.svg" class="w-14">
              <p class="text-button text-xl"> Treasury Operational Services </p>
            </div>  
          </c-button>
          <c-button data-next="TNTSS" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <p class="text-button text-xl"> Settlement System </p>
              <img src="assets/img/arrow-right-gold.svg" class="w-14">
            </div>  
          </c-button>
        </div>
    </div>
    `,
};
