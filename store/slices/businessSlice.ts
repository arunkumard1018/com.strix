import { Business } from '@/lib/definations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Business[] = [];

const businessSlice = createSlice({
    name: "businessList",
    initialState,
    reducers: {
        setBusinessList(state, action: PayloadAction<Business[]>) {
            return action.payload;
        },
        resetBusiness() { 
            return initialState;
        },
    },
});

export const { setBusinessList, resetBusiness } = businessSlice.actions;
export default businessSlice.reducer;
