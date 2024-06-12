import { createSlice } from '@reduxjs/toolkit';
import ux from '/ux.svg';
import graphics from '/graphics.svg';
import ai from '/ai.svg';
import cinema from '/4dd.svg';
import unreal from '/unreal.svg';

const designDataCardSlice = createSlice({
  name: 'designData',
  initialState: [
    { id: 1, image: ux, name: "UX Designer" },
    { id: 2, image: graphics, name: "Graphics Designer" },
    { id: 3, image: ai, name: "Illustration Artist" },
    { id: 4, image: unreal, name: "UnrealEngine" },
    { id: 5, image: cinema, name: "Cinema4D" },
  ],
  reducers: {}
});

export default designDataCardSlice.reducer;
