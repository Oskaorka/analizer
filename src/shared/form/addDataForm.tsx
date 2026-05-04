import { useState, useEffect } from "react";
import FormField from "./formField";
import dataService from "../service/dataService";
// import { object, string, number, date, InferType } from 'yup';
import * as yup from "yup"

// import getDataService from "../service/getDataServer"
interface IAddDataForm {
    handleSubmit?: any,
    executorList?: any,
    handleChange?: any,
    handleChangeForText?: any,
    clickBack?: any,
    myShop?: any,
    currentDate?: any,
    latestDate?: any,
    punctDoc?: any,
    nameInitiator?: any,
    typeDoc?: any,
    periodOfExecution?: any,
    executionOrder?: any,
    defaultValue?: any,
    setStyleDisplay?: any,
    styleDispley?: any
    errors?: any
}
const initialData = {
    idNumber:"",
    street: "",
    date: "",
    mip: "",
};
interface Ierrors {
    idNumber: number,
    street: string,
    date: Date,
    mip: number,
}

const AddDataForm = ({
    // handleSubmit,
    // executorList,
    // handleChange,
    // handleChangeForText,
    // clickBack,
    // myShop,
    // latestDate,
    // punctDoc,
    // currentDate,
    setStyleDisplay,
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
    // console.log(styleDispley);
    // const [dataText, setDataText] = useState({});
    const [dataText, setDataText] = useState(initialData);
    const [ errors, setErrors] = useState({})
    useEffect(() => {
        // console.log(dataText);
        // getData();
        validate();
        console.log(errors);
        
    // }, [dataText])
    }, [dataText])

    const dataValidateShema = yup.object().shape({
        street: yup.string().required("обязательно для заполнения"),
        // street: "",
        // date: "",
        // mip: "",
    })
    
    const isValid = Object.keys(errors).length === 0;
    
    const validate = () => {
        dataValidateShema.validate(dataText)
        .then(()=> setErrors({}))
        .catch((err)=> setErrors({[err.path]: err.message}))
        return Object.keys(errors).length === 0;
    }



    const handleChange = ({target}:any) => {
        console.log(dataText);
        console.log(isValid);
        // console.log(target);
        
        setDataText((prevState:any) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const isValid = validate();
        postData();
        // getData();
        // getDataService.getDatas();
        // setStyleDisplay('none')
        clearForm();
        if (isValid) return;
    }

    async function postData() {
        try {
            await dataService.createDataDpp(dataText);
        } catch (error) {
            console.log(error);   
        }
    }
    const clearForm = () => {
        setDataText(initialData);
        setStyleDisplay('none');
        // setStyleDisplay('none');
        console.log(dataText);
    }
    const clickBack  =() => {
        clearForm();
    }

    return (
        <div className="w-1/2 h-6/10 absolute rounded-xl bg-[#ffe3a8]"
        // style={{styleDispley}}
        style={{display: styleDispley,
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%"
                
        }}
        >
            <div className="flex flex-row-reverse justify-between"
                style={{ position: "relative"}}
            >
                <button
                    className="text-[10px]  text-center size-10 btn btn-outline-secondary mt-2 mr-2"
                    onClick={clickBack}
                    style={{ 
                        // fontSize: "20px",
                        // color: "grey",
                        position: "absolute"
                     }}
                    >
                        &#9587;
                </button>

            <h3 
                className="m-auto text-center pt-4"
                style={{ 
                    fontSize: "20px",
                    color: "grey",
                    // position: "absolute"
                 }}
            >
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
                            nameLabel={"ул.Самойловой, д.8 "}
                            name="street"
                            onChange={handleChange}
                            value={dataText.street}
                            description={"Улица магазина"}
                            type="text"
                            error={errors.street}
                        />
                        <FormField
                            name="mip"
                            value={dataText.mip}
                            onChange={handleChange}
                            nameLabel={"дата прошлой ревизии"}
                            description={"14.12.2025"}
                            type="date"
                            // className=""
                            />
                        <FormField
                            name="date"
                            nameLabel={"текущий мип (цифра)"}
                            value={dataText.date}
                            onChange={handleChange}
                            description={"133"}
                            type="text"
                        />
                        <FormField
                            name="idNumber"
                            nameLabel={"индитификатор"}
                            value={dataText.idNumber}
                            onChange={handleChange}
                            description={"22109"}
                            type="text"
                        />

                    </div>
                </div>
                <button 
                    className="btn btn-outline-secondary"
                    disabled={!isValid}
                    type="submit"
                >
                    Добавить данные
                </button>
            </form>

        </div>
    );
};

export default AddDataForm;