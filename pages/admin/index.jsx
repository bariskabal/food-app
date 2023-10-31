import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import Link from "next/link";
import { adminSchema } from "@/schema/admin";

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
          validationSchema: adminSchema,
        });

    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Your Username",
          value: values.username,
          errorMessage: errors.username,
          touched: touched.username,
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
                <Title className="text-4xl font-bold !font-chelsea">Admin Login</Title>
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
                    <Link href="/">
                        <span className="text-sm underline cursor-pointer text-gray-500">Home Page</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}