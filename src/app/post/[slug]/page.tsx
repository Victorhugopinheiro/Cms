
import { GetItemBySlug } from "@/utils/actions/get-data"
import { PostProps } from "@/utils/actions/propSlugData"
import { Metadata } from "next"
import Content from "./components/content"
import { Suspense } from "react"
import { FallBack } from "./components/fallBack/loading"





export async function generateMetadata({params}: { params:Promise<{slug:string}> }): Promise<Metadata> {

    try {

        const {slug} = await params

        const { objects }: PostProps = await GetItemBySlug(slug)
            .catch(() => {
                return {
                    title: "Cms - oficina certa para você",
                    description: "Trabalho excelete focado na satisfação do cliente",
                }
            })


        return {
            title: `Cmss - ${objects[0].title}`,
            description: "Trabalho excelete focado na satisfação do cliente",
            keywords: ["oficina", "troca de oleo", "manutenção de carros", "carros"],
            openGraph: {
                title: "DevMotors- sa oficina especializada",
                images: ["http://localhost:3000/logo.jpg"]
            },
            robots: {
                nocache: true,
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }



        }

    } catch (error) {
        return {
            title: "Cms - oficina certa para você",
            description: "Trabalho excelete focado na satisfação do cliente",
        }
    }
}


export default async function Page({ params }: { params:Promise<{slug:string}> }) {

    const {slug} = await params

    const {objects}: PostProps = await GetItemBySlug(slug)


    console.log(slug)
    return (
        <>
            <Suspense fallback={<FallBack/>}>
                <Content slug={slug} />
            </Suspense>
        </>



    )
}