import { createSlice } from '@reduxjs/toolkit';

const faqDataSlice = createSlice({
  name: 'faqData',
  initialState: [
    { id: 1, general: "General", question: "I want to work part-time, is that possible" },
    { id: 2, question: "How long are the average projects?" },
    { id: 3, question: "How does the payment works?" },
    { id: 4, question: "How much can I earn?" },
    { id: 5, general: "General", joiningProcess: "Joining Process", question: "I want to work part-time, is that possible" },
    { id: 6, question: "How long are the average projects?" },
    { id: 7, question: "How long are the average projects?" },
    { id: 8, question: "How much can I earn?" },
  ],
  reducers: {}
});

export default faqDataSlice.reducer;
