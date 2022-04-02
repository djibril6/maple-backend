import { EGender, EUserRole } from '../types';
import Joi from 'joi';
import { validation } from '.';

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.forbidden(),
    role: Joi.string().required().valid(EUserRole.ADMIN, EUserRole.USER),
    gender: Joi.string().valid(EGender.FEMALE, EGender.MALE),
    status: Joi.boolean().default(true),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    role: Joi.string().valid(EUserRole.ADMIN, EUserRole.USER),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOneUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(validation.objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(validation.objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(validation.password),
      name: Joi.string(),
      gender: Joi.string().valid(EGender.FEMALE, EGender.MALE),
      role: Joi.forbidden(),
      status: Joi.boolean(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(validation.objectId),
  }),
};

export default {
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createUser,
};
