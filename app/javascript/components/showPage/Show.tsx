import React from "react";
import Carousel from "nuka-carousel";
import { Listing } from "../utils/Interfaces";
import ContactForm from "../contactPage/ContactForm";

interface Props {
  listing: Listing;
}

export default function Show(props: Props) {
  const listing = props.listing;

  return (
    <div className="relative container mx-auto">
      <Carousel
        heightMode="max"
        style={{ maxHeight: "90vh" }}
        defaultControlsConfig={{
          containerClassName: "m-h-[90vh]",
          nextButtonText: "➤",
          prevButtonStyle: { transform: "rotate(180deg)" },
          prevButtonText: "➤",
          pagingDotsClassName: "mx-1",
        }}
      >
        {listing.photos.map(photo => (
          <img
            style={{ maxHeight: "70vh", objectFit: "contain" }}
            key={photo}
            src={photo}
          />
        ))}
      </Carousel>
      <div className="bottom-4 left-4 font-bold text-large z-50 bg-beige text-white px-4 py-2">
        <h1 className="standard">{listing.title}</h1>
      </div>
      <section className="tablet:grid tablet:grid-cols-3 tablet:grid-rows-1 gap-2 py-8 mx-2 whitespace-pre-line">
        <div className="col-span-2">
          <div className="p-4 w-full bg-white m-2 tablet:mx-0">
            <div className="tablet:mr-2">{listing.description}</div>
          </div>
          <div className="p-4 w-full bg-white m-2 tablet:mx-0">
            <h2 className="standard mb-2 text-lg">Detalhes do Imóvel</h2>
            <div className="w-full flex flex-wrap">
              {Object.keys(listing.stats).map((k, v) => {
                return (
                  <div key={k} className="border p-2 w-40">
                    <span className="font-bold">{k}:</span>
                    <br />
                    <span>{listing.stats[k]}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-4 w-full bg-white m-2 tablet:mx-0 h-fit">
            <h2 className="standard mb-2 text-lg">Características do Imóvel</h2>
            <ul
              className="tablet:ml-2 grid gap-4"
              style={{
                gridTemplateColumns: "repeat( auto-fit, minmax(230px, 1fr) )",
              }}
            >
              {listing.features.map(feat => {
                return (
                  <li key={feat} className="mx-8 list-disc">
                    {feat}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-start-3 p-1">
          <ContactForm listing={listing} />
        </div>
      </section>
    </div>
  );
}
