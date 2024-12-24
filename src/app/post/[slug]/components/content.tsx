import { Hero } from "@/components/hero"
import style from "./style.module.scss"
import { GetItemBySlug } from "@/utils/actions/get-data"
import { PostProps } from "@/utils/actions/propSlugData"
import { Container } from "@/components/container"
import Image from "next/image"
import { Metadata } from "next"
import { resolve } from "path"


function delay (ms:number){
    return new Promise(resolve => setTimeout(resolve,ms))

}

export default async function Content({ slug}: { slug:string }) {

    
    const { objects }: PostProps = await GetItemBySlug(slug)


    console.log(slug)
    return (
        <>
        
            <Hero banner={objects[0].metadata.banner.url} buttonText={objects[0].metadata.button.buttontitle} buttonUrl={objects[0].metadata.button.url} heading={objects[0].title} />

            <Container>
                <main className={style.main}>
                    <section className={style.content}>
                        <article className={style.contentAbout}>
                            <h1>{objects[0].metadata.description.titledesc}</h1>
                            <p>{objects[0].metadata.description.descriptiontext}</p>

                            {objects[0].metadata.description.buttonboolean && (
                                <a className={style.link} href={objects[0].metadata.description.buttonurl}>
                                    {objects[0].metadata.description.buttontext}
                                </a>
                            )}
                        </article>

                        <div className={style.divImage}>
                            <Image className={style.imageAbout}
                                quality={100} fill={true} priority={true}
                                alt={objects[0].title} src={objects[0].metadata.description.bannerdesc.url}
                                sizes="(max-width: 780px) 100vw, (max-width: 1280) 50vw"

                            />
                        </div>
                    </section>
                </main>
            </Container>
        </>



    )
}