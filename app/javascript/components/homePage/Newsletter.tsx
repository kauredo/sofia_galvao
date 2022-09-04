import React, { useRef, useState } from "react";
import { i18n } from "../../languages/languages";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const form = useRef(null);
  const pattern =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

  const validateUser = e => {
    e.preventDefault();
    const valid_email = pattern.test(email);

    if (valid_email && name) {
      form.current.submit().then(res => {
        console.log(res);
      });
    } else if (valid_email) {
      setError("Por favor insira um nome válido");
    } else {
      setError("Por favor insira um email válido");
    }
  };

  return (
    <section
      id="newsletter"
      className="mx-auto container p-2 text-gray body-font flex md:flex-row flex-col items-center py-12 h-fit min-h-[25rem]"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Receba as novidades do Mercado
        </h2>
        <p className="mb-8 leading-relaxed mx-2 tablet:mr-4">
          Subscreva a nossa newsletter e fique a par das mais recentes
          oportunidades, noticias e dicas do mercado.
          <span className="flex items-center font-medium tracking-wide text-beige text-xs">
            Ao pedir informações está a autorizar o Sofia Galvão Group a guardar
            os seus dados para o informar sobre oportunidades de negócio, de
            acordo com a Política de Privacidade.
          </span>
        </p>
        <form
          ref={form}
          onSubmit={e => validateUser(e)}
          action={window.Routes.newsletter_subscriptions_path({
            locale: i18n.locale,
          })}
          method="post"
          // className="w-full mx-2 tablet:mr-4"
        >
          <div className="w-full">
            <input
              className="border-l-4 border-beige focus:outline-none py-2 px-4 w-4/5 m-0 mb-2"
              placeholder="Nome"
              name="newsletter[name]"
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
            />
            <input
              className="border-l-4 border-beige focus:outline-none py-2 px-4 w-4/5 m-0 mb-2"
              placeholder="Email"
              name="newsletter[email]"
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="w-4/5 inline-flex text-white py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-beige cursor-pointer"
              required
              type="submit"
              value="Subscrever"
            />
          </div>
          {error && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {error}
            </span>
          )}
        </form>
      </div>
      <div
        className="h-[20rem] md:w-1/2 w-5/6 hidden md:block object-cover bg-center bg-no-repeat bg-cover object-center"
        // className="object-cover bg-center bg-no-repeat bg-cover object-center w-full h-2/3"
        style={{
          backgroundImage: `url(images/email.jpg)`,
        }}
      >
        {/* <img
          className="object-cover object-center"
          alt="hero"
          src="images/email.jpg"
        /> */}
      </div>
    </section>
  );
}
