// import mongoose from "mongoose";
// const { Schema, model } = mongoose;

import { Schema, model } from "mongoose";
import { hash } from 'bcryptjs';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, // trims whitespace from the beginning and end of the string
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate: {
                validator: (email) => {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                },
                message: "invalid email address",
            },
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        this.password = await hash(this.password, 10);
    }
});

// ensure password is hashed on update operations as well
userSchema.pre('findOneAndUpdate', async function () {
    if (this.getUpdate().password) {
        this.getUpdate().password = await hash(this.getUpdate().password, 10);
    }
});

const User = model('User', userSchema);

export default User;
