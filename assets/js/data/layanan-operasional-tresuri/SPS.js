const SPS = {
  id: "SPS",
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
        Scope Of Post Settlement  
      </h3>

      <c-card class="mt-12 w-full h-[284px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <p class="text-gradient text-3xl">
                1. Transaction Settlement Verification
            </p>
            <ul class="list-disc mx-12 text-2xl">
                <li class="Arial">
                Verification between transaction documents and accounting records
                </li>
                <li class="Arial">
                 Reconciliation of asset and liability account balances with transaction details
                </li>
                <li class="Arial">
                 Monitoring of rejection journals and their follow-up actions
                </li>
            </ul>
        </div>
      </c-card>

      <c-card class="mt-12 w-full h-[384px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <p class="text-gradient text-3xl">
                2. Reconciliation and Claim Settlement
            </p>
            <ul class="list-disc mx-12 text-2xl">
                <li class="Arial">
                Reconciliation of foreign exchange transactions (current accounts, government securities, deposits)
                </li>
                <li class="Arial">
                 Recording of Bank Indonesia's assets and liabilities in foreign currencies
                </li>
                <li class="Arial">
                 Opening, evaluating the usage, and closing of current accounts with correspondent/custodian banks
                </li>
                <li class="Arial">
                 Resolution of claims related to settlement issues conducted by BI/Counterparty/Bank
                </li>
            </ul>
        </div>
      </c-card>

      <c-card class="mt-12 w-full h-[216px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <p class="text-gradient text-3xl">
                3. Reporting, Evaluation and Gold Management
            </p>
            <ul class="list-disc mx-12 text-2xl">
                <li class="Arial">
                Managing and administering the physical gold for reserves and non-reserve purposes
                </li>
            </ul>
        </div>
      </c-card>

     <div class="flex justify-between items-center w-full mt-12"> 
          <c-button data-previous="treasury-profile" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <img src="assets/img/arrow-left-gold.svg" class="w-14">
              <p class="text-button text-xl"> Treasury Operational Services </p>
            </div>  
          </c-button>
          <c-button data-next="GM" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <p class="text-button text-xl"> Gold Management </p>
              <img src="assets/img/arrow-right-gold.svg" class="w-14">
            </div>  
          </c-button>
        </div>
    </div>
    `,
};
