import mongoose from 'mongoose';
import { EGender, EUserRole } from '..';

export interface IUserID {
  id: string;
};
export interface IName {
  name: string;
};
export interface IEmail {
  email: string;
};
export interface IGender {
  gender: EGender;
};
export interface IRole {
  role: EUserRole;
};
export interface IPassword {
  password: string;
}
export interface IStatus {
  status: boolean;
}

export interface IUser extends
  Partial<IName>,
  Partial<IEmail>,
  Partial<IGender>,
  Partial<IRole>,
  Partial<IStatus>,
  Partial<IPassword>
{}

export interface IUserDocument extends mongoose.Document, IUser
{
  isPasswordMatch?: (password: string) => Promise<boolean>;
}