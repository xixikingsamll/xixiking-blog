import axiosInstance from "@/utils/http"

// 管理员登录
export const adminLogin = async (form:string) => {
    try {
        const response = await axiosInstance.post("/api/admin/login", form)
        return response
    } catch (error) {
        return error
    }
}