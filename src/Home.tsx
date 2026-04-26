import { useState, useEffect } from "react";
import { Table } from "./shared/ui/Table/Table";
import dataService from "./shared/service/dataService";
// import FormField from "./shared/form/formField";
import AddDataForm from "./shared/form/addDataForm";

function Home() {

    const [data, setData] = useState([])
    useEffect(() =>{
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
    const cls = 'p-4 border border-gray-500 bg-slate-200'

    const addData = () => {
        console.log('click');
        setStyleDisplay('block')
        // FormField();
    }

    const [styleDispley, setStyleDisplay] = useState('none');
    const clickBack  =() => {
        // console.log("ddd");
        setStyleDisplay('none')
    }

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
                <AddDataForm styleDispley={styleDispley} clickBack={clickBack}/>
                {/* <FormField/> */}
                {/* <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button> */}
        </>
    )
}

export default Home
