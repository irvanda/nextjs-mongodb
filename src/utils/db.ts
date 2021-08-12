import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/km';

// connect to mongoDB database
async function dbConnect() {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
