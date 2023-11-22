import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";

export default function Password() {


    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            password: "",
            confirmPassword: "",
          },
          onSubmit,
          validationSchema: newPasswordSchema,
        });

    const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Your password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id: 2,
          name: "confirmPassword",
          type: "password",
          placeholder: "Your Confirm Password",
          value: values.confirmPassword,
          errorMessage: errors.confirmPassword,
          touched: touched.confirmPassword,
        }
      ];


    return(
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-y-10">
            <Title className="text-5xl lg:text-start text-center font-righteous">Change Password</Title>
            <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 grid-cols-1 w-full gap-4 mt-4">
                {inputs.map((input) => (
                    <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
                ))}
            </div>
            <div className="text-right">
                <button className="btn-primary" type="submit">Update</button>
            </div>
        </form>
    )
}