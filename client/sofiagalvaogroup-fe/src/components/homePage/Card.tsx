import React, { useState } from "react";
import { sanitizeURLWithParams, truncateText } from "../utils/Functions";
import ListingIcons from "../shared/ListingIcons";
import Overlay from "../shared/Overlay";

export default function Card({ listing }) {
  return (
    <div
      style={{ marginTop: "-2rem" }}
      className="card mx-auto max-w-sm flex-shrink-0 relative w-full h-full shadow-md sm:w-auto"
    >
      <a href={sanitizeURLWithParams("#listing", listing.slug)}>
        <div
          className="ajustedBackground object-cover bg-center bg-no-repeat bg-cover object-center w-full h-2/3 relative"
          style={{
            backgroundImage: `url(${listing.photos[0]})`,
            // backgroundImage: "url(/images/banner.webp)",
          }}
        >
          <Overlay status={listing.status} padding={true} />
        </div>
        <div className="px-6 py-4 h-1/3 justify-between flex flex-col bg-white">
          <h2 className="text-l grow  text-gray-800">
            <span>{truncateText(listing.title, 80)}</span>
          </h2>
          <ListingIcons listing={listing} />
        </div>
      </a>
    </div>
  );
}
