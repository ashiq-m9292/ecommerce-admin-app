import { toast } from "react-toastify";
import { PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_GET_FAILURE, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAILURE, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "../Constant";
const productApi = import.meta.env.VITE_API;


// create product 
export const createProduct = (productData: any) => async (dispatch: any) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return toast("User token not available");
        }
        // use in form form data submission 
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('price', productData.price);
        formData.append('description', productData.description);
        formData.append('category', productData.category);
        formData.append('stock', productData.stock);

        // multiple images append
        if (productData.images) {
            productData.images.forEach((image: File) => {
                formData.append('images', image);
            });
        };

        const response = fetch(`${productApi}/api/v1/product/createproduct`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
            body: formData,
        })
        const data = await (await response).json();
        if (!(await response).ok) {
            toast.error(data.message);
            return { success: false };
        };
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
        toast.success("Product created successfully");
        return { success: true };
    } catch (error) {
        dispatch({ type: PRODUCT_CREATE_FAILURE, payload: error })
        if (error instanceof Error) {
            toast.error("Product creation failed: " + error.message);
        } else {
            toast.error("Product creation failed");
        }
        return { success: false };
    }
}


// get product details 
export const getProducts = () => async (dispatch: any) => {
    try {
        const response = await fetch(`${productApi}/api/v1/product/getallproducts`, {
            credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) {
            toast.error(data.message);
            return;
        }
        dispatch({ type: PRODUCT_GET_SUCCESS, payload: data.products });
    } catch (error) {
        dispatch({ type: PRODUCT_GET_FAILURE, payload: error });
        if (error instanceof Error) {
            toast.error("Failed to fetch products: " + error.message);
        } else {
            toast.error("Failed to fetch products");
        }
    }
}


// update product details 
export const updateProduct = (id: string, updatedData: any) => async (dispatch: any) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return toast("User token not available");
        }
        const formData = new FormData();
        formData.append('name', updatedData.name);
        formData.append('price', updatedData.price);
        formData.append('description', updatedData.description);
        formData.append('category', updatedData.category);
        formData.append('stock', updatedData.stock);

        if (updatedData.images) {
            updatedData.images.forEach((image: File) => {
                formData.append('images', image);
            });
        }

        const response = await fetch(`${productApi}/api/v1/product/updateproduct/${id}`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
            body: formData,
        });

        const data = await response.json();
        if (!response.ok) {
            toast.error(data.message);
            return { success: false }
        }
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
        toast.success("Product updated successfully");
        return { success: true }

    } catch (error) {
        dispatch({ type: PRODUCT_UPDATE_FAILURE, payload: error });
        if (error instanceof Error) {
            toast.error("Product update failed: " + error.message);
        } else {
            toast.error("Product update failed");
        }
        return { success: false }
    }
}


// delete product 

export const deletProduct = (id: string) => async (dispatch: any) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return toast("User token not available");
        }
        const response = await fetch(`${productApi}/api/v1/product/deleteproduct/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) {
            toast.error(data.message);
            return { success: false }
        }
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
        toast.success("Product deleted successfully");
        return { success: true }
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error });
        if (error instanceof Error) {
            toast.error("Product deletion failed: " + error.message);
        } else {
            toast.error("Product deletion failed");
        }
        return { success: false }
    }
}