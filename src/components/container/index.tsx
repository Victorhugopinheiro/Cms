import { ReactNode } from "react"
import styles from "./container.module.scss"

export function Container ({children}:{children:ReactNode}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}