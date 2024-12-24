export interface PostProps{
    objects: DataItem[]
}


interface DataItem{
    slug:string
    title:string
    type:string
    metadata:{
        banner:{
            url:string
        },
        button:{
            buttontitle:string
            url:string
        },
        description:{
            titledesc:string
            descriptiontext:string
            bannerdesc:{
                url:string
            }
            buttonboolean:boolean
            buttontext:string
            buttonurl:string
        }
    }
}