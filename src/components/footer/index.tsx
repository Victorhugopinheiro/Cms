import { Clock, Mail, Map, Phone } from "lucide-react"
import styles from "./styles.module.scss"
import { DataProps } from "@/utils/actions/PropsDataHome/data"

export function Footer({ object }: DataProps) {


    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <h2 className={styles.contato}>Contatos</h2>
                <div className={styles.control}>
                    <div className={styles.contentFooter}>

                        <div>
                            <Mail size={26} />
                        </div>

                        <div>
                            <strong>Email</strong>
                            <p>{object.metadata.contact.email}</p>
                        </div>

                    </div>

                    <div className={styles.contentFooter}>

                        <div>
                            <Phone size={26} />
                        </div>

                        <div>
                            <strong>Telefone</strong>
                            <p>{object.metadata.contact.phone}</p>
                        </div>

                    </div>

                    <div className={styles.contentFooter}>

                        <div>
                            <Map size={26} />
                        </div>

                        <div>
                            <strong>Endereço</strong>
                            <p>{object.metadata.contact.endereco}</p>
                        </div>

                    </div>

                    <div className={styles.contentFooter}>

                        <div>
                            <Clock size={26} />
                        </div>

                        <div>
                            <strong>Horario </strong>
                            <p>{object.metadata.contact.time}</p>
                        </div>

                    </div>



                </div>

            </section>

            <div className={styles.divButton}>
                <Phone size={18}/>
                <a className={styles.button} href={object.metadata.cta_button.url}>{object.metadata.cta_button.tittle}</a>
            </div>

           

        </footer>
    )
}