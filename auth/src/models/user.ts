import mongoose from "mongoose";
import { Password } from "../services/password";

interface UserAttrs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  passwords: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// hash password before sign up
// not arrow function to save reference from UserDoc
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  //required by MongoDB
  done();
});

// build function for creating User Schema with types
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

// create User model with types
const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
