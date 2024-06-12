import { createSlice } from '@reduxjs/toolkit';
import onboard from '/onboard.png';
import card1 from '/card.png';
import card2 from '/card2.png';

const cardDataSlice = createSlice({
  name: 'cardData',
  initialState: [
    {
        id: 1,
        title: "Onboard without the risk.",
        data1: "We pick the best for you to select.",
        data2: "Thousands of vetted candidates in dozens of categories.",
        data3: "Risk-free resource swapping for the best fit.",
        color: 'rgba(80, 88, 159, 1)',
        image: onboard,
    },
    {
        id: 2,
        title: "An open book.",
        data1: "Easy and transparent one-to-one chat with candidates.",
        data2: "Simple and convenient payment methods.",
        data3: "Review past ratings.",
        color: 'rgba(255, 190, 46, 1)',
        image: card1
    },
    {
        id: 3,
        title: "Stay in the loop.",
        data1: "Track your staff activity down to every minute with screenshots.",
        data2: "Comprehensive timesheet data to process payments.",
        data3: "Create projects to organize and assign tasks more effectively.",
        color: 'rgba(199, 244, 194, 1)',
        image: card2
    }
  ],
  reducers: {}
});

export default cardDataSlice.reducer;
