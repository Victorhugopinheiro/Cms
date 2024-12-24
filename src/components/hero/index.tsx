import Image from "next/image";
import styles from "./style.module.scss"
import { ReactNode } from "react";
import { Phone } from "lucide-react";

interface HeroProps {
    banner: string;
    heading: string;
    buttonText: string;
    buttonUrl: string
}


export function Hero({ banner, heading, buttonText, buttonUrl}: HeroProps) {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.control}>
                    <h1>{heading}</h1>



                    <a className={styles.link}
                        target="_blank"
                        href={buttonUrl}>
                        {<Phone size={18} color="white"/>}
                        {buttonText}
                    </a>


                </div>

                <div className={styles.containerImg}>
                    <Image className={styles.banner} alt="Imagem para contato" src={banner} quality={100} priority={true} fill={true} sizes="(max-width: 780px) 100vw, (max-width: 1280) 50vw"/>
                </div>
            </div>

        </main>
    )
}