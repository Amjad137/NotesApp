import joi from "joi";

export const validateInput = (noteData) => {
  const schema = joi.object({
    Title: joi.string().required(),
    Content: joi.string().required(),
  });
  return schema.validateAsync(noteData);
};

//validation is done using "Joi"
