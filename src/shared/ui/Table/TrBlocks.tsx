import { ThBlock } from "./ThBlock";

interface ITitle {
    title: string;
    cls: string;
    data: any;
}

interface IData {
    street: string;
    mip: string;
    date: any;
    [key: string]: unknown;
}

export const TrBlocks = (props:ITitle) => {
    const {cls, data} = props;
    console.log(data);

    return(
        <>
            {
                data.map((e: IData, i : number) =>(
                    <tr key={i}>
                        <ThBlock cls={cls} title={e.street}/>
                        <ThBlock cls={cls} title={e.mip}/>
                        <ThBlock cls={cls} title={e.date}/>
                    </tr> 
                )) 
            }
        </>
          )
        }
