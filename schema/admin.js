import * as Yup from "yup";

export const adminSchema = Yup.object({
    username: Yup.string().required("Username is required.").email("Email is invalid.").min(3,"Password must be at least 3 character long"),
    password: Yup.string().required("Password is required.").min(8,"Password must be at least 8 character long").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
  });