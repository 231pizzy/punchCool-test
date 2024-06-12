import { createSlice } from '@reduxjs/toolkit';
import shopify from '/shopify.png';
import magento from '/magento.png';
import ds from '/ds.png';
import webflow from '/webflow.png';
import dotnet from '/dotnet.png';

const itDevDataSlice = createSlice({
  name: 'itDevData',
  initialState: [
    { id: 1, image: shopify, name: "Shopify Developer" },
    { id: 2, image: magento, name: "Magento Developer" },
    { id: 3, image: ds, name: "Data Scientist" },
    { id: 4, image: webflow, name: "Webflow Developer" },
    { id: 5, image: dotnet, name: "Dot Net Developer" },
  ],
  reducers: {}
});

export default itDevDataSlice.reducer;
