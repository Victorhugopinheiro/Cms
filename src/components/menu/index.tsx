"use client"

import Link from "next/link";
import style from "./styles.module.scss"
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { PageProps } from "@/utils/actions/pagesProps";

interface MenuProps {
    menu: PageProps
}


export function MeuMenu({ menu }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        console.log(menu)

        const controlResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", controlResize)


        return () => {
            window.removeEventListener("resize", controlResize)
        }
    }, [])

    function getResize() {
        setIsOpen(!isOpen)
    }

    return (
        <section className={style.container}>
            <div onClick={getResize} className={style.Menu}>


                <Menu size={28} />


                <span>
                    Menu
                </span>
            </div>

            <ul className={`${style.ulList} ${isOpen ? style.true : ""}`}>
                {isOpen && (
                    <button onClick={getResize} className="closeButton">
                        <X size={26} />
                    </button>
                )}
                {menu.objects.map((item) => (
                    <li key={item.slug}>
                        <Link href={`/post/${item.slug}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}



            </ul>
        </section>
    )
}