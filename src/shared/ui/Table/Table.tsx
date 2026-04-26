import { TrBlock } from "./TrBlock";
import { TrBlocks } from "./TrBlocks";

interface ITheadTiles {
    cls: string
    dataInfo: object
}

export const Table = (props:ITheadTiles) => {
    const {cls, dataInfo} = props;  
    const values = Object.values(dataInfo);

    return(
        <>
            <table className="border-collapse border border-gray-400 cursor-pointer">
                <thead>
                    {<TrBlock cls={cls}/>}
                </thead>
                <tbody>
                    {<TrBlocks cls={cls} data={values} title={""}/>}
                </tbody>
            </table>
        </>
    )
}