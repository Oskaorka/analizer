import { ThBlock } from "./ThBlock";

interface ITitle {
    title: string;
    cls: string;
    data: any;
}

interface IData {
    street: string;
    mip: string;
    idNumber: string;
    date: any;
    [key: string]: unknown;
}

export const TrBlocks = (props:ITitle) => {
    const {cls, data} = props;

    return(
        <>
            {
                data.map((e: IData, i : number) =>(
                    <tr key={i}>
                        <ThBlock cls={cls} title={e.street}/>
                        <ThBlock cls={cls} title={e.idNumber}/>
                        <ThBlock cls={cls} title={e.date}/>
                        <ThBlock cls={cls} title={e.mip}/>
                    </tr> 
                )) 
            }
        </>
          )
        }
