import style from "./fallback.module.scss"

export function FallBack (){

    return(
        <div className={style.divContainer}>
            <h1>Carregando...</h1>
        </div>
    )
}