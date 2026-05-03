
import dataService from "./dataService";

// export default async function getData(setData) {
//     try {
//         const content  =  await dataService.getDpp();
//         setData(content)  
//         console.log(content);
               
//     } catch (error) {
//         console.log(error);
//     }
// }


const getDataService = {
    // getDatas: async (setData) => {
    getDatas: async (setData) => {
        try {
            const content  =  await dataService.getDpp();
            setData(content)  
            // console.log(content);  
            // return content
        } catch (error) {
            console.log(error);
        }
    }
}

export default getDataService;