import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import {AiFillGithub} from "react-icons/ai"
import Link from "next/link";

export default function Login() {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            email: "",
            password: "",
          },
          onSubmit,
          validationSchema: loginSchema,
        });

    const inputs = [
        {
          id: 1,
          name: "email",
          type: "text",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        }
      ];


    return(
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col items-center my-20 w-1/2 mx-auto gap-y-10">
                <Title className="text-4xl font-bold !font-chelsea">Login</Title>
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
                    <button className="btn-primary flex items-center justify-center gap-x-2 !bg-secondary !text-white">Github<AiFillGithub /></button>
                    <Link href="/auth/register">
                        <span className="text-sm underline cursor-pointer text-gray-500">Do you no have an account?</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}