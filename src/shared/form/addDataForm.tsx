// import { useState } from "react";
import FormField from "./formField";

interface IAddDataForm {
    handleSubmit?: any,
    executorList?: any,
    handleChange?: any,
    handleChangeForText?: any,
    clickBack?: any,
    nameDoc?: any,
    numberDoc?: any,
    punctDoc?: any,
    dateDoc?: any,
    nameInitiator?: any,
    typeDoc?: any,
    periodOfExecution?: any,
    executionOrder?: any,
    defaultValue?: any,
    styleDispley?: any
}

const AddDataForm = ({
    handleSubmit,
    // executorList,
    // handleChange,
    handleChangeForText,
    clickBack,
    nameDoc,
    numberDoc,
    // punctDoc,
    dateDoc,
    // nameInitiator,
    // typeDoc,
    // periodOfExecution,
    // executionOrder,
    // defaultValue,
    styleDispley
            }:IAddDataForm) => {
    // const [styleDispley, setStyleDisplay] = useState('none');
    // const clickBack  =() => {
    //     // console.log("ddd");
    //     setStyleDisplay('none')
    // }
    console.log(styleDispley);
    
    return (
        <div className="w-1/2 h-1/2 absolute top-50 left-100 rounded-xl bg-[#ffe3a8] opacity-95"
        // style={{styleDispley}}
        style={{display: styleDispley}}
        >
            <div className="flex flex-row-reverse justify-between">
                <button className="text-[10px]  text-center size-10 btn btn-outline-secondary mt-2 mr-2" onClick={clickBack}>
                &#9587;
                </button>

            <h3 className="m-auto text-center pt-4">
                Внести новые данные
            </h3>
            </div>
            <form
                onSubmit={handleSubmit}
                className="d-flex flex-column align-items-center"
            >
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="wrapper-field wrapper-field-left">
                        <FormField
                            nameLabel={"№22109, ул.Самойловой, д.8 "}
                            name="nameDoc"
                            onChange={handleChangeForText}
                            value={nameDoc}
                            description={"Магазин"}
                            type="text"
                        />
                        <FormField
                            name="numberDoc"
                            value={numberDoc}
                            onChange={handleChangeForText}
                            nameLabel={"дата прошлой ревизии"}
                            description={"14.12.2025"}
                            type="text"
                            />
                        <FormField
                            name="dateDoc"
                            nameLabel={"текущий мип"}
                            value={dateDoc}
                            onChange={handleChangeForText}
                            description={"133 дня"}
                            type="text"
                        />

                    </div>
                </div>
                <button className="btn btn-outline-secondary">
                    Добавить данные
                </button>
            </form>

        </div>
    );
};

export default AddDataForm;