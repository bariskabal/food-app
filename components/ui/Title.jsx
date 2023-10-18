export default function Title({ children, ...props }){
    return(
        <div className={`${props.className} font-mono text-bold`}>{children}</div>
    )
}