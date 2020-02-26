import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { validateFieldSuccess, validateFieldError } from "../../store";
import joi from "@hapi/joi";
import get from "lodash/get";

const emailSchema = joi.string().email({
  tlds: false
});

const useValidation = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => get(state, "email.error", ""));
  const value = useSelector(state => get(state, "email.value"));
  const validate = React.useCallback(
    valueFromEvent => {
      const { value, error } = emailSchema.validate(valueFromEvent);
      if (error) {
        dispatch(
          validateFieldError({
            value,
            error: error.message
          })
        );
      } else {
        dispatch(validateFieldSuccess(value));
      }
    },
    [dispatch]
  );

  return {
    error,
    value,
    validate
  };
};

export default useValidation;
