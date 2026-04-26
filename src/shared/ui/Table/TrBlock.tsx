import { ThBlock } from "./ThBlock";

interface ITitle {
    // title: string;
    cls: string;
}
export const TrBlock = (props:ITitle) => {
    const {cls} = props;
    return(
        <tr>
            {/* <th className={cls}>{title}</th> */}
            {<ThBlock 
                title={"магазин"}
                cls={cls}
            />}
            {<ThBlock 
                title={"мип"}
                cls={cls}
            />}
            {<ThBlock 
                title={"дата прошлой ревизии"}
                cls={cls}
            />}
        </tr> 
          
    )
}