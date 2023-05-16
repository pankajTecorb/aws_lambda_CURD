import { Schema, model } from 'mongoose';

interface user {
    name:string;
    email: string;
    phoneNumber:string,
    address:string,
    isActive: boolean;
    isDelete: boolean;
}

const schema = new Schema<user>({
    name:{type:String ,required:true},
    email: { type: String , required:true },
    phoneNumber:{type:String},
    address:{type:String},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

const userModel = model<user>('users', schema);
export = userModel