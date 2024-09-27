// store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Business {
    id: number;
    name: string;
    invoicePrefix: string;
    invoiceSeq: number;
    businessLogo: string | null;
    businessType: string;
}

interface UserState {
    id: number | null;
    name: string;
    activeBusiness: Business | null;
    businesses: Business[];
}

const initialState: UserState = {
    id: null,
    name: '',
    activeBusiness: null,
    businesses: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.businesses = action.payload.businesses;
            state.activeBusiness = action.payload.activeBusiness || action.payload.businesses[0] || null;
        },
        setActiveBusiness: (state, action: PayloadAction<number>) => {
            state.activeBusiness = state.businesses.find(business => business.id === action.payload) || null;
        },
        resetBusinessList(state){
            state.businesses = [];
        },

        clearUser(state) {
            state.id = null;
            state.name = '';
            state.activeBusiness = null;
            state.businesses = [];
        },
    },
});

export const { setUser, setActiveBusiness, clearUser,resetBusinessList } = userSlice.actions;
export default userSlice.reducer;


