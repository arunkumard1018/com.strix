import axios from "axios";

export const logout = async () => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/remove-cookie`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            return
        } else {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            return
        }
    }
    catch {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        console.log()
        return
    }
}
