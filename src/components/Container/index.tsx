import style from './styles.module.css'

type ContainerProps = {
    children: React.ReactNode
}

export function Container(props: ContainerProps){
    return(
        <div className={style.container}>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}