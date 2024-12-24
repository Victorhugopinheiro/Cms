import Image from "next/image"
import styles from "./about.module.scss"
import { DataProps } from "@/utils/actions/PropsDataHome/data"



export function About({ object }: DataProps) {
    return (
        <>
            <section className={styles.content}>
                <div className={styles.aboutAndH1}>
                    <h1 className={styles.meuH1}>Sobre</h1>
                    <p className={styles.desc}>
                        {object.metadata.about.description}
                    </p>

                </div>

                <div className={styles.controlImg}>
                    <Image className={styles.imageAbout} quality={100} priority={true} fill={true} alt="Imagem do meu about" src={object.metadata.about.imagemabout.url} sizes="(max-width: 780px) 100vw, (max-width: 1280) 50vw"/>
                </div>




            </section>


            <h1 className={styles.knowService}>Coheça nossos serviços</h1>

            <section className={styles.containerService}>


                {object.metadata.conhecendo_servicos.map(serviço => (
                    <article key={serviço.servicotext} className={styles.contentService}>


                        <div className={styles.contentServiceImage}>
                            <Image className={styles.imageService} quality={100} priority={true} fill={true}
                                alt="Imagem do serviço"
                                src={serviço.servicos.url} sizes="(max-width: 780px) 100vw, (max-width: 1280) 50vw" />
                        </div>

                        <p>{serviço.servicotext}</p>

                    </article>
                ))}
            </section>


        </>


    )
}