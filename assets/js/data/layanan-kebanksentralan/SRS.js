const SRS = {
    id: 'SRS',
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
        Central Banking Services
      </h2>
    </div>

    <div class="pt-80 container mx-14 w-fit">
      <h3 class="text-5xl title w-fit mx-auto uppercase text-center">
        Sub-Registry Services
      </h3>

      <p class="mt-14 text-center text-3xl text-shadow" style="font-family: Arial, Helvetica, sans-serif;">
        Sub-Registry is Bank Indonesia and other parties, who meet the requirements and are approved by the organizer, acting as participants of the Bank Indonesia-Scripless Securities Settlement System (BI-SSSS), to carry out administrative functions for the benefit of Customers.   
      </p>

      <div class="flex flex-col justify-center items-center mt-14">
        <img class=" " src="assets/img/SRS/sub-title.png"  >    
        <div class="grid grid-cols-3 justify-items-center items-end gap-20 px-12 mt-10">
            <img class="mt-0" src="assets/img/SRS/MF.png"  >
            <img class="mt-0" src="assets/img/SRS/CG.png"  >
            <img class="mt-0" src="assets/img/SRS/OAP.png"  >
        </div>
        <div class="grid grid-cols-3 justify-items-center items-start gap-4 mt-8">
            <h5 class="text-2xl text-center">Ministry of Finance</h5>
            <h5 class="text-2xl text-center">County Government</h5>
            <h5 class="text-2xl text-center">Other Approved Parties</h5>
        </div>

        <img class=" mt-12" src="assets/img/SRS/SLA.png"  >    
        
        <c-card class="w-full h-[225px] mt-14">
            <div class="flex flex-col p-6">
                <p class="text-button text-center text-3xl font-semibold w-fit mx-auto"> 
                    The Objective of Sub-Registry Services
                </p>
                <div 
                  class="w-full mt-6 mb-4 h-1 rounded"
                  style="
                    background: linear-gradient(90deg, #a97c50 0%, #e7cba0 50%, #a97c50 100%);
                    opacity: 0.7;
                  "
                ></div>
                <ul class="list-disc pl-8 pr-4 text-xl text-white" style="font-family: Arial, Helvetica, sans-serif;">
                  <li style="font-family: Arial, Helvetica, sans-serif;">
                    As a means of managing goverment cash for MoF
                  </li>
                  <li style="font-family: Arial, Helvetica, sans-serif;">
                    as a means of securities administration resulting from distribution of profit-sharing funds and/or general allocation funds for Country Goverment 
                  </li>
                </ul>
            </div>
        </c-card>

        <div class="flex justify-between items-center w-full mt-8"> 
          <c-button data-previous="lk-type-of-service" class="w-88">
            <div class="flex justify-center items-center  px-8">
              <img src="assets/img/arrow-left-gold.svg" class="w-14">
              <p class="text-button text-xl"> Central Banking Services Menu </p>
            </div>  
          </c-button>
          <c-button data-next="SRBS" class="w-88">
            <div class="flex justify-center items-center  px-8">
              <p class="text-button text-xl"> Sub-Registry Business Services </p>
              <img src="assets/img/arrow-right-gold.svg" class="w-14">
            </div>  
          </c-button>
        </div>
      </div>
    </div>
    `
}