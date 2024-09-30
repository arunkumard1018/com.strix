// store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Business {
    id: number;
    name: string;
    invoicePrefix: string;
    invoiceSeq: number;
    businessLogo: string ;
    businessType: string;
    stateCode: number;
    hsn: number;
    gstin: string;
}

export interface UserData {
    id: number | null;
    name: string;
    activeBusiness: Business | null;
    businesses: Business[];
}

const initialState: UserData = {
    id: null,
    name: '',
    activeBusiness: null,
    businesses: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setUser(state, action: PayloadAction<UserData>) {
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

        addBusiness(state, action : PayloadAction<Business>){
            state.businesses.push(action.payload)
        },

        removeBusiness(state,action:PayloadAction<number>){
            state.businesses = state.businesses.filter(business => business.id !== action.payload);
            if (state.activeBusiness?.id === action.payload) {
                state.activeBusiness = state.businesses[0] || null;
            }
        },

        clearUser(state) {
            state.id = null;
            state.name = '';
            state.activeBusiness = null;
            state.businesses = [];
        },
    },
});

export const { setUser, setActiveBusiness, clearUser,resetBusinessList,addBusiness,removeBusiness } = userSlice.actions;
export default userSlice.reducer;


