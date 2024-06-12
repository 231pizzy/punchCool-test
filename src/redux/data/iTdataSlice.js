import { createSlice } from '@reduxjs/toolkit';

const itDataSlice = createSlice({
  name: 'itData',
  initialState: [
    { id: 1, name: "Python Developer" },
    { id: 2, name: "Data Scientist" },
    { id: 3, name: "Shopify Developer" },
    { id: 4, name: "Front End Developer" },
    { id: 5, name: "Python Developer" },
    { id: 6, name: "Data Scientist" },
    { id: 7, name: "MERN Stack Developer" },
    { id: 8, name: "Java developer" },
    { id: 9, name: "Flutter developer" },
    { id: 10, name: "Shopify Developer" },
    { id: 11, name: "Front End Developer" },
    { id: 12, name: "Explore More" },
  ],
  reducers: {}
});

export default itDataSlice.reducer;
