import { createSlice } from '@reduxjs/toolkit';

const designDataSlice = createSlice({
  name: 'designData',
  initialState: [
    { id: 1, name: "Graphic Designer" },
    { id: 2, name: "UI/UX Designer" },
    { id: 3, name: "Illustrator" },
    { id: 4, name: "Motion Graphic Designer" },
    { id: 5, name: "3D Animator" },
    { id: 6, name: "Video Editor" },
    { id: 7, name: "Brand Designer" },
    { id: 8, name: "Art Director" },
    { id: 9, name: "Web Designer" },
    { id: 10, name: "Product Designer" },
    { id: 11, name: "Creative Director" },
    { id: 12, name: "Explore More" },
  ],
  reducers: {}
});

export default designDataSlice.reducer;
