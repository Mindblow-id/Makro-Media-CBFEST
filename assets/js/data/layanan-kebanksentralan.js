const LK1Data = {
    id: 'lk-profile',
    data: `
    <button
      class="card-button text-lg absolute top-40 xl:top-56 left-14 xl:left-20"
      data-previous="home"
      style="border-radius: 12px; border-width: 2px; padding: 8px 12px"
    >
      <span class="text-xl pr-2">&#8249;</span> Back to Home
    </button>
    <h2
      class="absolute top-40 xl:top-56 right-12 xl:right-18 text-4xl xl:text-5xl text-[#F8E910]"
    >
      Layanan Kebanksentralan
    </h2>

    <div class="pt-96 container mx-14 w-fit">
      <h4 class="text-[#F8E910] text-2xl mb-4">Profile</h4>
      <h3 class="text-5xl">
        Banking Services, Licensing, and Tresury Operations Department
      </h3>

      <div class="card-button mt-20">
        <h5 class="text-[#F8E910] text-3xl">
          PADG No. 21/12/PADG INTERN/2019 about Organization of Banking
          Services, Lincesing, and Treasury Operations Department
        </h5>
        <hr class="my-8" />
        <h5 class="text-2xl">
          Banking Services, Licensing, and Treasury Operations Department is a
          department that performs banking services function to the Government
          of the Republic of Indonesia and other strategic stakeholders.
        </h5>
      </div>
      <div class="flex justify-center items-center mt-20">
        <button class="card-button text-4xl " style="padding: 60px 80px;" data-next="lk-type-of-service">Learn More About Our Banking Services</button>
      </div>
    </div>
    `
}

const LK2Data = {
    id: 'lk-type-of-service',
    data: `
    <button
      class="card-button text-lg absolute top-40 xl:top-56 left-14 xl:left-20"
      data-previous="home"
      style="border-radius: 12px; border-width: 2px; padding: 8px 12px"
    >
      <span class="text-xl pr-2">&#8249;</span> Back to Home
    </button>
    <h2
      class="absolute top-40 xl:top-56 right-12 xl:right-18 text-4xl xl:text-5xl text-[#F8E910]"
    >
      Layanan Kebanksentralan
    </h2>

    <div class="pt-96 container mx-14 w-fit">
      <h4 class="text-[#F8E910] text-2xl mb-4">Type of Services</h4>
      <h3 class="text-5xl">
        Central Banking Services
      </h3>

      <div class="card-button mt-20">
        <h5 class="text-[#F8E910] text-3xl">
          PADG No. 23/18/PADG/2021 about Regulation Implementation of Central Banking Services
        </h5>
        <hr class="my-8" />
        <h5 class="text-2xl">
          Central Banking Services are service provided by Bank Indonesia to its customers to support the implementation of Bank Indonesia’s duties related to monetary, macroprudential, and payment system which includes current account services and the settlement of customer’s financial transaction
        </h5>
      </div>

      <img class="mt-20" src="./assets/img/segi-lima.svg" >
      <div class="flex justify-center items-center mt-20 gap-4">
        <button class="card-button text-2xl h-40" style="" data-next="lk-type-of-service">Current Account Services</button>
        <button class="card-button text-2xl h-40" style="" data-next="lk-type-of-service">Letter of Credit (L/C) Transaction Services</button>
        <button class="card-button text-2xl h-40" style="" data-next="lk-type-of-service">Sub Registry Services</button>
      </div>
    </div>
    `
}