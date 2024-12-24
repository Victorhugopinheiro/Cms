export interface DataProps {
    object: {
        slug: string;
        title: string;
        type: string;
        metadata: {
            banner: {
                url: string;
            }
            heading: string;
            cta_button: {
                tittle:string;
                url:string
            };
            about:{
                description:string
                imagemabout:{
                    url:string
                }
            }
            conhecendo_servicos:Servicos[]

            contact:{
                email:string;
                phone:string;
                endereco:string
                time:string
            }
        }
    }
}


interface Servicos{
    servicos:{
        url:string;
    }
    servicotext:string
}