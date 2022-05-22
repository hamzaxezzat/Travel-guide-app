import axios from "axios";

const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
    url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
    params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
    },
    headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "8108a96776mshdaa599ce29a1e48p107daajsn4fb226fbad50",
    },
};

export const getPlacesData = async () => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
};
