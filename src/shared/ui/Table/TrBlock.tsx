import { ThBlock } from "./ThBlock";

interface ITitle {
    cls: string;
}
export const TrBlock = (props:ITitle) => {
    const {cls} = props;
    return(
        <tr>
            {<ThBlock 
                title={"магазин (адрес)"}
                cls={cls}
            />}
            {<ThBlock 
                title={"№ магазина"}
                cls={cls}
            />}
            {<ThBlock 
                title={"мип (дней прошло)"}
                cls={cls}
            />}
            {<ThBlock 
                title={"дата прошлой ревизии"}
                cls={cls}
            />}
        </tr> 
          
    )
}