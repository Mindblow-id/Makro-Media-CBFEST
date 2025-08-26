const SFTS = {
    id: 'SFTS',
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
        Scope Of Forex Treasury Settlement  
      </h3>

      

      <c-card class="mt-12 w-full h-[284px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <p class="text-gradient text-3xl">
                1. Settlement of Reserve Management Transaction
            </p>
            <ul class="list-disc mx-12 text-2xl">
                <li class="Arial">
                Fixed Income (SSB)
                </li>
                <li class="Arial">
                    Money Market (Deposito overnight, regular)
                </li>
                <li class="Arial">
                 Foreign Exchange
                </li>
                <li class="Arial">
                 Gold Deposits
                </li>
            </ul>
        </div>
      </c-card>
      <c-card class="mt-12 w-full h-[296px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <p class="text-gradient text-3xl">
                2. Settlement of Monetary Operation Transaction
            </p>
            <ul class="list-disc mx-12 text-2xl">
                <li class="Arial">
                    Money Market (Term Deposit overnight, regular, conventional, syariah, and DHE SDA)
                </li>
                <li class="Arial">
                    Foreign Exchange (Forex interventions: spot, forward, swap, Domestic Non-Deliverable Forward (DNDF), hedging swaps, etc.)
                </li>
                <li class="Arial">
                    SBBI Forex, SVBI, SUVBI
                </li>
            </ul>
        </div>
      </c-card>

      <c-card class="mt-12 w-full h-[600px]" content-style="top: 0; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: start;">
        <div class="mx-12 mt-8">
            <p class="text-gradient text-3xl">
                3. Settlement of Other Forex Transaction
            </p>
            <ul class="list-disc mx-12 text-2xl">
                <li class="Arial">
                    Fund Transfer Transactions (Cover).
                </li>
                <li class="Arial">
                    Transactions related to External Portfolio Manager (EPM).
                </li>
                <li class="Arial">
                    Transactions related to Third Party Securities Lending (TPSL).
                </li>
                <li class="Arial">
                    Transactions involving receipts and/or payments related to current accounts, claim/debit interest, penalties for settlement failures of monetary operation transactions, custody fees, and trading fees.
                </li>
                <li class="Arial">
                    Transactions related to International Financial Cooperation (IFC) al: Local Currency Bilateral Agreement (LCBSA), Bilateral Swap Arrangement (BSA), Bilateral Currency Swap Arrangement (BCSA), dan Chiang Initiative Multilateralization (CMIM).
                </li>
                <li class="Arial">
                    Transactions related to Special Drawing Rights (SDR).
                </li>
                <li class="Arial">
                    Transactions related to current accounts originating from BI-ERP and BI-CBS.
                </li>
                <li class="Arial">
                    Fund Allocation for Foreign Representative Offices (KPwLN).
                </li>
            </ul>
        </div>
      </c-card>

     <div class="flex justify-between items-center w-full mt-12"> 
          <c-button data-previous="treasury-profile" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <img src="assets/img/arrow-left-gold.svg" class="w-14">
              <p class="text-button text-xl"> Back to Menu </p>
            </div>  
          </c-button>
          <c-button data-next="SNTS" class="w-96">
            <div class="flex justify-center items-center  px-8">
              <p class="text-button text-xl"> Scope of Non Treasury Settlement </p>
              <img src="assets/img/arrow-right-gold.svg" class="w-14">
            </div>  
          </c-button>
        </div>
    </div>
    `
}