import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";

// store chứa toàn bộ state
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
