"use client"

import Link from "next/link"
import styles from "./style.module.scss"
import { useState, useEffect } from "react"

export function Header() {

    const [controle, setControle] = useState(true)

    const scrolando = () => {
        window.scrollY > 10 ? setControle(false) : setControle(true)
    }

    useEffect(() => {
        function control () {
            window.addEventListener("scroll", scrolando)
        }

        control()

        return () => window.removeEventListener("scroll", scrolando)

        
    }, [controle])

    return (
        <header className={`${styles.header} ${!controle ? styles.fixed : styles.background}` } >
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href={"/"}>Dev Motors</Link>
                    </div>

                    <nav className={styles.navigation}>
                        <Link href={"/"}>Home</Link>

                        <Link href={"/#servicos"}>Serviços</Link>

                        <Link href={"/#contatos"}>Contato</Link>
                    </nav>

                </div>
            </div>
        </header>
    )
}