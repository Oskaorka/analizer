import httpService from "./httpService";
const shopEndpoint = "shop/";
const dppEndpoint = "dppUsers/";

const dataService = {
    getShop: async () => {
        const { data } = await httpService.get(shopEndpoint);
        console.log(data);
        return data;
    },
    getDpp: async () => {
        const { data } = await httpService.get(dppEndpoint);
        console.log(data);
        return data;
    }
}

export default dataService;