import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAProduct = createAsyncThunk(
  "product/getAProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRating = createAsyncThunk(
  "product/rating",
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduct(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const quantityAddOrder = createAsyncThunk(
  "product/add-order-quantity",
  async (data, thunkAPI) => {
    try {
      return await productService.updateQuantityOrder(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const quantityCancelOrder = createAsyncThunk(
  "product/canle-order-quantity",
  async (data, thunkAPI) => {
    try {
      return await productService.updateQuantityCancel(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);
export const resetState = createAction("Reset_all");

const productState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product added to wishlist";
        if (state.isSuccess) {
          toast("Add product wish list success");
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
        state.message = "Product Fetched Successfully";
      })
      .addCase(getAProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.rating = action.payload;
        state.message = "Rating Added Successfully";
        if (state.isSuccess) {
          toast.success("Rating Added Successfully");
        }
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Error");
        }
      })
      .addCase(quantityAddOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(quantityAddOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.quantityAddOrder = action.payload;
        state.message = action.error;
      })
      .addCase(quantityAddOrder.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Error");
        }
      })
      .addCase(quantityCancelOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(quantityCancelOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.quantityCancelOrder = action.payload;
        state.message = action.error;
      })
      .addCase(quantityCancelOrder.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Error");
        }
      });
  },
});

export default productSlice.reducer;
