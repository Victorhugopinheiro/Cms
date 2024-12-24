"use client"
import { Container } from "@/components/container";
import Link from "next/link";
import style from "./erro.module.scss"



export default function Error () {
    return(
        <main>
            <Container>
                <section className={style.section}>
                    <h1>Ops essa página não existe</h1>

                    <Link href={"/"}>Voltar para a home</Link>
                </section>
            </Container>
        </main>
    )
}