import { configureStore } from '@reduxjs/toolkit';
import designDataSlice from './data/designDataSlice';
import itDevDataSlice from './data/itDevDataSlice';
import designDataCardSlice from './data/designDataCardSlice';
import cardDataSlice from './data/cardDataSlice';
import faqDataSlice from './data/faqDataSlice';
import footerDataSlice from './data/footerDataSlice';
import ITdataSlice from './data/ITdataSlice';




const store = configureStore({
  reducer: {
    itData: ITdataSlice,
    designData: designDataSlice,
    itDevDataCard: itDevDataSlice,
    designDataCard: designDataCardSlice,
    cardData: cardDataSlice,
    faqData: faqDataSlice,
    footerData: footerDataSlice
  }
});

export default store;
