// import app from './app';
// import { connectDB } from './config/db';

// const PORT = process.env.PORT || 5000;

// // Connect to Database
// connectDB();

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


