import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import {AiFillGithub} from "react-icons/ai"
import Link from "next/link";
import { registerSchema } from "@/schema/register";

export default function Register() {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
          },
          onSubmit,
          validationSchema: registerSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your fullName",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
          },
        {
          id: 2,
          name: "email",
          type: "text",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id: 4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Your Password Again",
          value: values.confirmPassword,
          errorMessage: errors.confirmPassword,
          touched: touched.confirmPassword,
        }
      ];


    return(
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col items-center my-20 w-1/2 mx-auto gap-y-10">
                <Title className="text-4xl font-bold !font-chelsea">Register</Title>
                <div className="flex flex-col gap-y-4 w-full">
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                      />
                    ))}
                    
                </div>
                <div className="flex flex-col w-full gap-y-3">
                    <button className="btn-primary">Login</button>
                    <Link href="/auth/login">
                        <span className="text-sm underline cursor-pointer text-gray-500">Do you have an account?</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}