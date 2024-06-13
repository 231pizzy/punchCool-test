import { configureStore } from '@reduxjs/toolkit';
import designDataSlice from './data/designDataSlice';
import itDevDataSlice from './data/itDevDataSlice';
import designDataCardSlice from './data/designDataCardSlice';
import cardDataSlice from './data/cardDataSlice';
import faqDataSlice from './data/faqDataSlice';
import footerDataSlice from './data/footerDataSlice';
import techDataSlice from './data/techDataSlice';




const store = configureStore({
  reducer: {
    techData: techDataSlice,
    designData: designDataSlice,
    itDevDataCard: itDevDataSlice,
    designDataCard: designDataCardSlice,
    cardData: cardDataSlice,
    faqData: faqDataSlice,
    footerData: footerDataSlice
  }
});

export default store;
