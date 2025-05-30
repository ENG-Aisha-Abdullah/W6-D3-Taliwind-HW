import React from "react";

function GoogleMap() {
  return (
    <div className="flex flex-col h-full w-full bg-gray-100 py-5">
        <h1 className="text-2xl px-10 ">Explore destinations</h1>
          <p className=" text-base px-10 pb-5">Not sure where to go? Use our interactive map to find flights to great destinations.</p>
      <div class="relative w-full h-96">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        >

        </iframe>
      </div>
              <p className=" text-xs px-10 py-5">*The prices shown are roundtrip fares and have been available within the last 48 hours. Additional baggage fees may apply. Fare prices in miles will include additional taxes and fees.</p>

    </div>
  );
}

export default GoogleMap;
