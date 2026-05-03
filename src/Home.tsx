import { useState, useEffect } from "react";
import { Table } from "./shared/ui/Table/Table";
import AddDataForm from "./shared/form/addDataForm";
// import getDataService from "./shared/service/getDataServer"
import dataService from "./shared/service/dataService"


function Home() {

    const [data, setData] = useState([])
    const [styleDispley, setStyleDisplay] = useState('none');

    const cls = 'p-4 border border-gray-500 bg-slate-200'
    // getDataService.getDatas(setData)
    // console.log((conta));
    // console.log(dataService.getDpp());
    // dataService.getDpp();
    useEffect(() => {
        // setData(conta)
        getData();
        console.log(data);
    }, [])
    
    async function getData() {
        try {
            const content  =  await dataService.getDpp();
            setData(content)  
            // console.log(content);  
            // return content
        } catch (error) {
            console.log(error);
        }
    }


    const addData = () => {
        setStyleDisplay('block')

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
                <AddDataForm 
                    styleDispley={styleDispley} 
                    // clickBack={clickBack}
                    setStyleDisplay={setStyleDisplay} 
                    // handleChangeForText={handleChange}
                    // handleSubmit={handleSubmit}
                />
        </>
    )
}

export default Home
