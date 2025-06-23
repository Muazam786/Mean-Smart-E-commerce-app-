const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('YOUR_MONGODB_URI')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API Running'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
