import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z\s]+$/)
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.pattern.base': 'Name must contain only letters and spaces.',
      'string.min': 'Name must be at least 3 characters long.',
      'string.max': 'Name must be no more than 20 characters long.',
      'any.required': 'Name is a required field.',
    }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9+\-() ]+$/)
    .min(7)
    .max(20)
    .required()
    .messages({
      'string.pattern.base':
        'Phone number can contain only digits, +, -, (), and spaces.',
      'string.min': 'Phone number must be at least 7 characters long.',
      'string.max': 'Phone number must be no more than 20 characters long.',
      'any.required': 'Phone number is a required field.',
    }),
  email: Joi.string().email().max(254).messages({
    'string.email': 'Please enter a valid email address.',
    'string.max': 'Email must be no more than 254 characters long.',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'The "isFavourite" field must be a boolean value.',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required()
    .messages({
      'any.only':
        'Contact type must be one of the following: work, home, personal.',
      'any.required': 'Contact type is a required field.',
    }),
  userId: Joi.string().required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z\s]+$/)
    .min(3)
    .max(20)
    .messages({
      'string.pattern.base': 'Name must contain only letters and spaces.',
      'string.min': 'Name must be at least 3 characters long.',
      'string.max': 'Name must be no more than 20 characters long.',
    }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9+\-() ]+$/)
    .min(7)
    .max(20)
    .messages({
      'string.pattern.base':
        'Phone number can contain only digits, +, -, (), and spaces.',
      'string.min': 'Phone number must be at least 7 characters long.',
      'string.max': 'Phone number must be no more than 20 characters long.',
    }),
  email: Joi.string().email().max(254).messages({
    'string.email': 'Please enter a valid email address.',
    'string.max': 'Email must be no more than 254 characters long.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The "isFavourite" field must be a boolean value.',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only':
      'Contact type must be one of the following: work, home, personal.',
  }),
});
