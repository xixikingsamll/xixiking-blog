import axiosInstance from "@/utils/http"

// 获取分类
export const getCategory = async () => {
    try {
        const response = await axiosInstance.get("/api/get/category")
        return response
    } catch (error) {
        return error
    }
}

// 获取文章
export const getArticle = async (id: any) => {
    try {
        const response = await axiosInstance.get(`/api/article?category_id=${id}`)
        return response
    } catch (error) {
        return error
    }
}