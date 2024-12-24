import { Hero } from "@/components/hero";
import { MeuMenu } from "@/components/menu";
import { getDataHome, GetPages } from "@/utils/actions/get-data";
import { DataProps } from "@/utils/actions/PropsDataHome/data";
import { json } from "stream/consumers";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import { About } from "@/components/page/about";
import { Footer } from "@/components/footer";
import { PageProps } from "@/utils/actions/pagesProps";

export default async function Home() {

  const menu:PageProps = await GetPages()
  const { object }: DataProps = await getDataHome();
  console.log("aaaaaaaaaa")
  console.log(object.metadata.about)
  return (
    <div >
      <MeuMenu menu={menu} />

      <Hero banner={object.metadata.banner.url} buttonText={object.metadata.cta_button.tittle}
        buttonUrl={object.metadata.cta_button.url} heading={object.metadata.heading} />

      <Container>
        <About object={object} />

        <Footer object={object}/>
      </Container>
    </div>
  );
}
