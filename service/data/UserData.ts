import axios from "axios";

export const fetchMe = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/me`,
            { withCredentials: true }
        );
        console.log("RESP",response)
        if (response.status === 200) {
            return (response.data)
        } else {
            return null;
        }
    } catch (error) {
        console.log("ERROR",error)
        return error;
    }
}

