import * as Yup from "yup";

export const validator = (type) => {
  switch (type) {
    // case "startDateTime":
    //   return Yup.date().required("Required").min(moment(), "Invalid");
    case "emailRequired":
      return Yup.string()
        .email("Expected input: email")
        .required("This field is Required");
    // case "intPositiveRequired":
    //   return Yup.number().positive(positiveValMessage).required("Required");
    // case "intRequired":
    //   return Yup.number()
    //     .min(0, minValMessage)
    //     .max(100, maxValMessage)
    //     .required("Required");
    case "notRequired":
      return Yup.string().notRequired();
    case "requiredMultiSelect":
      return Yup.array()
        .min(1, "Select at least one value")
        .required("Required");
    case "phone":
      const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

      return Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("This field is Required");
    case "password":
      return Yup.string()
        .required("Required")
        .matches(
          // /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/,
          // /^(?=.*[A-Z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
          "Password must have atleast 8 characters, including atleast one uppercase and one number"
        );
    case "required":
    default:
      return Yup.string().required("This field is Required");
  }
};

export const displayFormErrors = (
  key = "",
  errors = {},
  touched = {},
  submitCount = 1
) => {
  if (errors[key] !== undefined && errors[key] && submitCount) {
    return (
      <span className="text-danger input-feedback font12 input-error">
        {errors[key]}
      </span>
    );
  }
  return null;
};

export const projectValidation = () => {
  return Yup.object().shape({
    title: validator("required"),
    // effectFeature: validator("required"),
  });
};
