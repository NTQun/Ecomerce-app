import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authService } from "./userService";

const getCustomerfromlocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "user/order/get",
  async (thunkAPI) => {
    try {
      return await authService.getUserOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProdToCart = createAsyncThunk(
  "user/cart/add",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserCart = createAsyncThunk(
  "user/cart/get",
  async (data, thunkAPI) => {
    try {
      return await authService.getCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteCartProduct = createAsyncThunk(
  "user/cart/product/delete",
  async (data, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateCartProduct = createAsyncThunk(
  "user/cart/product/update",
  async (cartDetail, thunkAPI) => {
    try {
      return await authService.updateProductFromCart(cartDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createAnOrder = createAsyncThunk(
  "user/cart/product/create-order",
  async (orderDetail, thunkAPI) => {
    try {
      return await authService.createOrder(orderDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/profile/update",
  async (data, thunkAPI) => {
    try {
      return await authService.updateUser(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);
export const forgotPasswordToken = createAsyncThunk(
  "user/password/token",
  async (data, thunkAPI) => {
    try {
      return await authService.forgotPassToken(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/password/reset",
  async (data, thunkAPI) => {
    try {
      return await authService.resetPass(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const deleteUserCart = createAsyncThunk(
  "user/cart/delete",
  async (data, thunkAPI) => {
    try {
      return await authService.emptyCart(data);
    } catch (errors) {
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const cancelAOrder = createAsyncThunk(
  "order/update-order",
  async (data, thunkAPI) => {
    try {
      return await authService.updateOrder(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAdd = createAsyncThunk(
  "address/get-address",
  async (thunkAPI) => {
    try {
      return await authService.getAdd();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getoneAdd = createAsyncThunk(
  "address/getone-address",
  async (id, thunkAPI) => {
    try {
      return await authService.getoneAdd(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAdd = createAsyncThunk(
  "address/update-address",
  async (id, thunkAPI) => {
    try {
      return await authService.updateAdd(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const newAdd = createAsyncThunk(
  "address/new-address",
  async (data, thunkAPI) => {
    try {
      return await authService.newAdd(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAdd = createAsyncThunk(
  "address/delete-address",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteAdd(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");

const initialState = {
  user: getCustomerfromlocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        state.message = "success";
        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isError === true) {
          toast.info(action.payload.response.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("User Login Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(addProdToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProdToCart.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        if (state.isSuccess) {
          toast.success("Product Added To Cart");
        }
      })
      .addCase(addProdToCart.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isError) {
          toast.error("Wrong Something");
        }
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.cartProducts = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isError) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(deleteCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.deletedCartProduct = action.payload;
        if (state.isSuccess) {
          toast.success("Product Deleted From Cart SuccessFully!");
        }
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isError) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(updateCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedCartProduct = action.payload;
        if (state.isSuccess) {
          toast.success("Product Deleted From Cart SuccessFully!");
        }
      })
      .addCase(updateCartProduct.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isSuccess === false) {
          toast.error("Something Went Wrong");
        }
      })
      .addCase(createAnOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAnOrder.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orderedProduct = action.payload;
        if (state.isSuccess) {
          toast.success("Ordered Created Successfully!!");
        }
      })
      .addCase(createAnOrder.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state.isSuccess === false) {
          toast.error("Something Went Wrong");
        }
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.getorderedProduct = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedUser = action.payload;
        let currentUserData = JSON.parse(localStorage.getItem("customer"));
        let newUserData = {
          _id: currentUserData?._id,
          token: currentUserData?.token,
          firstname: action?.payload?.firstname,
          lastname: action?.payload?.lastname,
          email: action?.payload?.email,
          mobile: action?.payload?.mobile,
        };
        localStorage.setItem("customer", JSON.stringify(newUserData));
        state.user = newUserData;

        toast.success("Profile Updated Successfully!");
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Went Wrong!");
        }
      })
      .addCase(forgotPasswordToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = action.payload;
        if (state.isSuccess) {
          toast.success("Forgot Password Email Sent Successfully!");
        }
      })
      .addCase(forgotPasswordToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Went Wrong!");
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pass = action.payload;
        if (state.isSuccess) {
          toast.success("Password Updated Successfully!");
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Went Wrong!");
        }
      })
      .addCase(deleteUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCart = action.payload;
      })
      .addCase(deleteUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(cancelAOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelAOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cancel = action.payload;
      })
      .addCase(cancelAOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAdd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.address = action.payload;
      })
      .addCase(getAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getoneAdd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getoneAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.oneaddress = action.payload;
      })
      .addCase(getoneAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAdd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updateAdd = action.payload;
      })
      .addCase(updateAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAdd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteAdd = action.payload;
      })
      .addCase(deleteAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(newAdd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.newAddress = action.payload;
        if (state.isSuccess) {
          toast.success("Add new Address Success");
        }
      })
      .addCase(newAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
