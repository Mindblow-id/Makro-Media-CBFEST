const SNTS = {
  id: "SNTS",
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

    <div class="pt-80 container mx-14 w-fit">
      <h3 class="text-5xl title w-fit mx-auto uppercase text-center">
        Scope Of Non Treasury Settlement  
      </h3>

      

      <c-card class="mt-12 w-full h-[384px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <ol type="1" class="list-disc mx-12 text-2xl">
                <li class="Arial">
                Management of the Operational Head Office for RTGS, SKNBI and BI-FAST
                </li>
                <li class="Arial">
                   Settlement of incoming and outgoing transactions between the Core Banking System surrounding and Bank Indonesia's payment systems (RTGS, SSSS, SKN-BI, and BI-FAST) for the settlement of rupiah funds for government, Bank Indonesia, and other customer transactions.
                </li>
                <li class="Arial">
                Recording in CBS using SWIFT for the settlement of incoming foreign exchange funds for government transactions and reserve requirements.
                </li>
                <li class="Arial">
                Performing correction entries and manual transactions for adjustments and other needs.
                </li>
            </ol>
        </div>
      </c-card>

     <div class="flex justify-between items-center w-full mt-12"> 
          <c-button data-previous="treasury-profile" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <img src="assets/img/arrow-left-gold.svg" class="w-14">
              <p class="text-button text-xl"> Treasury Operational Services </p>
            </div>  
          </c-button>
          <c-button data-next="SPS" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <p class="text-button text-xl"> Scope of Post Settlement </p>
              <img src="assets/img/arrow-right-gold.svg" class="w-14">
            </div>  
          </c-button>
        </div>
    </div>
    `,
};
