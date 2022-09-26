import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const items = [
    {
      title: "Instagram",
      url: "https://www.instagram.com/sofiagalvaokw/",
      icon: faInstagram,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/sofiagalvaokw",
      icon: faFacebook,
    },
    { title: "Whatsapp", url: "https://wa.me/351932829084", icon: faWhatsapp },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/sofia-galv%C3%A3o-a141621/",
      icon: faLinkedin,
    },
  ];

  return (
    <footer className="bg-beige p-4 sm:p-12 mt-12">
      <div className="container mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://sofiagalvaogroup.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/logos/main_white.png"
              className="h-12"
              alt="Sofia Galvão Group Alternative Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center text-sm text-gray-500">
            <li>
              <a
                href={window.Routes.about_path()}
                className="mr-4 hover:underline text-white hover:text-gray-100 md:mr-6 "
              >
                sobre nós
              </a>
            </li>
            <li>
              <a
                href={window.Routes.privacy_path()}
                className="mr-4 hover:underline text-white hover:text-gray-100 md:mr-6"
              >
                política de privacidade
              </a>
            </li>
            <li>
              <a
                href={window.Routes.terms_and_conditions_path()}
                className="mr-4 hover:underline text-white hover:text-gray-100 md:mr-6 "
              >
                termos e condições
              </a>
            </li>
            <li>
              <a
                href={window.Routes.contact_path()}
                className="hover:underline text-white hover:text-gray-100"
              >
                contactos
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex justify-between tablet:justify-start items-center ">
          <div className="tablet:pr-4">
            <p className="text-sm text-white">
              © 2022 Sofia Galvão Group. All Rights Reserved.
            </p>
            <p className="text-sm text-white">
              KW Lead Santos - Av Dom Carlos I, 124J - Santos, Lisboa
            </p>
            <p className="text-sm text-white">
              Agent Centric Mediação Imobiliária, Lda - AMI 12518
            </p>
          </div>
          <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
            {items.map(item => {
              return (
                <a
                  key={`${item.title}--desktop`}
                  href={item.url}
                  className="text-white hover:text-gray-100"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
