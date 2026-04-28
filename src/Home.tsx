import { useState, useEffect } from "react";
import { Table } from "./shared/ui/Table/Table";
import dataService from "./shared/service/dataService";
import AddDataForm from "./shared/form/addDataForm";

function Home() {
    const [dataText, setDataText] = useState({
        myShop: "",
        currentDate: "",
        latestDate: "",
    });
    const [data, setData] = useState([])
    const [styleDispley, setStyleDisplay] = useState('none');

    const cls = 'p-4 border border-gray-500 bg-slate-200'
    
    useEffect(() =>{
        console.log(dataText);
        getData();
        
    }, [])
    
    async function getData() {
        try {
            const content  =  await dataService.getDpp();
            setData(content)         
        } catch (error) {
            console.log(error);
            
        }
    }

    const addData = () => {
        setStyleDisplay('block')
    }

    const clickBack  =() => {
        setStyleDisplay('none')
    }
    const handleChange = ({target}:any) => {
        console.log(dataText);
        console.log(target);
        
        setDataText((prevState:any) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <>
            <h1 className='text-[#50d71e] mb-10'>Главная страница</h1>
            {data && <Table 
                cls={cls}
                dataInfo={data}
                />
            }
                <button 
                    className='mt-10'
                    onClick={addData}
                >
                    войти в систему
                </button>
                <AddDataForm 
                    styleDispley={styleDispley} 
                    clickBack={clickBack} 
                    handleChangeForText={handleChange}
                />
        </>
    )
}

export default Home
