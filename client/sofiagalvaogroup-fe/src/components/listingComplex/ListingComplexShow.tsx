import { useEffect, useState } from "react";
import { ListingComplex } from "../utils/Interfaces";
import { i18n } from "../../languages/languages";
import { find_listing_complex_by_id } from "../../utils/getters";
import NewShow from "./NewShow";
import Show from "./Show";
import { useResource } from "../../contexts/ResourceContext";

export default function ListingComplexShow() {
  const meta_title = i18n.t("buy.header");
  const meta_description = i18n.t("buy.meta_description");

  const [complex, setComplex] = useState<ListingComplex | any>(null);
  const { setResource } = useResource();

  useEffect(() => {
    const fetchData = async () => {
      const path = window.location.pathname.split("/");
      let id;
      if (Object.keys(i18n.translations).includes(path[1])) {
        id = path[3];
      } else {
        id = path[2];
      }

      const tempComplex = await find_listing_complex_by_id(id);

      return { tempComplex };
    };

    fetchData().then(data => {
      setComplex(data.tempComplex.listing_complex);
      setResource({
        path: `/backoffice/listing_complexes/${data.tempComplex.listing_complex.slug}/edit`,
        name: "Empreendimento",
      });
    });
  }, []);

  if (!complex) {
    return <div>Loading...</div>;
  }

  if (complex.new_format) {
    return <NewShow complex={complex} />;
  } else {
    return <Show complex={complex} />;
  }
}
