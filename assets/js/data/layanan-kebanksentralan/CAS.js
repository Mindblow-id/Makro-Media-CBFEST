const CAS = {
    id: 'CAS',
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
        class="xl:top-56 right-12 xl:right-18 text-4xl xl:text-5xl text-white"
      >
        Current Account Services
      </h2>
    </div>

    <div class="pt-80 container mx-14 w-fit">
      <h3 class="text-5xl title w-fit mx-auto uppercase">
        Central Banking Services
      </h3>

      <p class="mt-12 text-center text-3xl text-shadow" style="font-family: Arial, Helvetica, sans-serif;">
        External party current account administration services provided by Bank Indonesia, which is a means of administering savings, deposit and withdrawal transactions that can be carried out in accordance with the provisions and requirements set by Bank Indonesia.
      </p>

      <div class="flex flex-col justify-center items-center mt-12">
        <img class=" color-dodge" src="assets/img/CAS/law.png"  >
        <img class=" color-dodge mt-12" src="assets/img/CAS/sla.png"  >

        <div class="flex justify-between items-center w-full mt-12"> 
          <c-button data-previous="lk-type-of-service" class="w-80">
            <div class="flex justify-center items-center  px-8">
              <img src="assets/img/arrow-left-gold.svg" class="w-14">
              <p class="text-button text-xl"> Central Banking Services Menu </p>
            </div>  
          </c-button>
          <c-button data-next="CAABP" class="w-80">
            <div class="flex justify-center items-center  px-8">
              <p class="text-button text-xl"> Central Banking Services Menu </p>
              <img src="assets/img/arrow-right-gold.svg" class="w-14">
            </div>  
          </c-button>
        </div>
      </div>
    </div>
    `
}