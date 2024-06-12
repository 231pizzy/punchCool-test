import { createSlice } from '@reduxjs/toolkit';

const footerDataSlice = createSlice({
  name: 'footerData',
  initialState: [
    {
      heading: 'PLATFORMS',
      items: ['Find Work', 'Find Talent', 'Categories', 'About Us']
    },
    {
      heading: 'CATEGORIES',
      items: ['Data Science', 'IT & Networking', 'Web & Mobile']
    },
    {
      heading: 'HELP',
      items: ['FAQ’s', 'Contact Us', 'Help 3']
    },
    {
      heading: 'GET IN TOUCH @',
      items: ['Instagram', 'LinkedIn', 'Twitter']
    }
  ],
  reducers: {}
});

export default footerDataSlice.reducer;
