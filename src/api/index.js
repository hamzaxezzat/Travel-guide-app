import axios from "axios";

const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
// const options =

export const getPlacesData = async (sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, {
            url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "8108a96776mshdaa599ce29a1e48p107daajsn4fb226fbad50",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
