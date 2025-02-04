import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  id: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: String}
});

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;