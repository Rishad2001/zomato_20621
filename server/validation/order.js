import joi from "joi";

export const ValidateFoodOrder = (order) => {
    const Schema = joi.object({
        orderDetails: joi.string().required()
    });

    return Schema.validateAsync(order);
}
