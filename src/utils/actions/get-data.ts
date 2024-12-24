import { error } from "console"
import { json } from "stream/consumers"



export async function getDataHome() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/6750e71f4eaf9a736887f8d5?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)

        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }

        return response.json()

    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}


export async function GetPages() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,type,`)

        if (!response.ok) {
            throw new Error("Failed to fetch")
        }


        return response.json()
    }
    catch (error) {
        console.log("error")
    }
}



export async function GetItemBySlug(slug: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`


    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: slug
        }),
        props: "slug,title,content,metadata",
        read_key: `${process.env.READ_KEY}`
    })

    const dados = `${baseUrl}?${queryParams.toString()}`


    try {
        const response = await fetch(dados, { next: { revalidate: 120 } })


        if (!response.ok) {
            throw new Error("Failed to get item by slug")
        }

        return response.json()

    } catch (error) {
        throw new Error("Failed to get item by slug")
    }
}