interface ITitle {
    title: string;
    cls: string;
}
export const ThBlock = (props:ITitle) => {
    const {title, cls} = props;
    return(
        <th className={cls}>{title}</th>  
    )
}