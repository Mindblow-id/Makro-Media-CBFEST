const treasuryProfile = {
    id: 'treasury-profile',
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
        Treasury Operational Services
      </h2>
    </div>

    <div class="pt-80 container mx-14 w-fit">
      <h3 class="text-5xl title w-fit mx-auto uppercase text-center">
        Treasury And Non Treasury Settlement that are effective, efficient, secure and meet international standards
      </h3>

      <c-card class=" w-full h-52">
        <p class="uppercase text-gradient text-2xl my-12 mx-6 text-center">
            OPPT Carries out the functions of monetary operation transaction settlement and reserves management settlement, as well as serving as the operational head office fo RTGS, SKNBI and BI-FAST, and Administration of gold reserve
        </p>
      </c-card>

      <div class="flex flex-col justify-center gap-8 items-center mt-14">

        <div class="flex justify-center items-center gap-12">
            <c-button class="" data-next="SRTS">
                <p class="text-button text-2xl font-semibold">
                    Rupiah Treasury Settlement
                </p>
            </c-button>
            <c-button class="">
                <p class="text-button text-2xl font-semibold">
                    Forex Treasury Settlement
                </p>
            </c-button>
        </div>
        <div class="flex justify-center items-center gap-12">
            <c-button class="">
                <p class="text-button text-2xl font-semibold">
                    Non Treasury Settlement
                </p>
            </c-button>
            <c-button class="">
                <p class="text-button text-2xl font-semibold">
                    Post Settlement System
                </p>
            </c-button>
        </div>
        <div class="flex justify-center items-center gap-12">
            <c-button class=" w-[450px]">
                <p class="text-button text-2xl font-semibold">
                    Treasury and Monetary Operation Infrastructure
                </p>
            </c-button>
            <c-button class="w-[450px]">
                <p class="text-button text-2xl font-semibold">
                    Reserve Reset Scoping
                </p>
            </c-button>
        </div>
        <div class="flex justify-center items-center gap-12">
            <c-button class="w-[500px]">
                <p class="text-button text-2xl font-semibold">
                    Modern Office Development
                </p>
            </c-button>
        </div>
      </div>
    </div>

    `
}