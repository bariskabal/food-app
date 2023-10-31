import Image from "next/image";
import {MdAccountBox,MdSportsMotorsports} from "react-icons/md"
import {BsKeyFill} from "react-icons/bs"
import {BiSolidExit} from "react-icons/bi"
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { accountSchema } from "@/schema/account";
import { useState } from "react";

export default function Profile(){


    const [tabs, setTabs] = useState(0)

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            persons: "",
            date: "",
          },
          onSubmit,
          validationSchema: accountSchema,
        });

    const inputs = [
        {
          id: 1,
          name: "fullName",
          type: "text",
          placeholder: "Your Full Name",
          value: values.fullName,
          errorMessage: errors.fullName,
          touched: touched.fullName,
        },
        {
          id: 2,
          name: "phoneNumber",
          type: "number",
          placeholder: "Your Phone Number",
          value: values.phoneNumber,
          errorMessage: errors.phoneNumber,
          touched: touched.phoneNumber,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 4,
          name: "address",
          type: "text",
          placeholder: "Your Address",
          value: values.address,
          errorMessage: errors.address,
          touched: touched.address,
        },
        {
          id: 5,
          name: "job",
          type: "text",
          placeholder: "Your Job",
          value: values.job,
          errorMessage: errors.job,
          touched: touched.job,
        },
        {
          id: 6,
          name: "bio",
          type: "text",
          placeholder: "Your Bio",
          value: values.bio,
          errorMessage: errors.bio,
          touched: touched.bio,
        }
      ];


    return(
        <div className="flex container  xl:gap-x-20 gap-x-10 md:flex-row flex-col items-center gap-y-10 py-10 mx-auto min-h-[calc(100vh_-_430px)]">
            <div className="h-auto w-72 flex-shrink-0 bg-secondary text-white rounded-xl">
                <div className="relative border rounded-t-xl px-10 py-5 flex gap-y-2 flex-col items-center">
                    <Image src="/assets/images/client2.jpg" width={100} height={100} className="rounded-full border-4 border-primary" alt="" />
                    <span className="text-2xl">
                        James MADDISON
                    </span>
                </div>
                <ul className="text-center">
                    <li onClick={() => setTabs(0)} className="border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-primary transition-all flex items-center justify-center gap-x-2">
                        <MdAccountBox size={20} />
                        <button className="font-semibold">
                            Account
                        </button>
                    </li>
                    <li onClick={() => setTabs(1)} className="border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-primary transition-all flex items-center justify-center gap-x-2">
                        <BsKeyFill size={20} />
                        <button className="font-semibold">
                            Password
                        </button>
                    </li>
                    <li onClick={() => setTabs(2)} className="border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-primary transition-all flex items-center justify-center gap-x-2">
                        <MdSportsMotorsports size={20} />
                        <button className="font-semibold">
                            Orders
                        </button>
                    </li>
                    <li onClick={() => setTabs(3)} className="border rounded-b-xl px-9 w-full p-3 cursor-pointer hover:bg-primary transition-all flex items-center justify-center gap-x-2">
                        <BiSolidExit size={20} />
                        <button className="font-semibold">
                            Exit
                        </button>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-y-10">
                <Title className="text-5xl lg:text-start text-center font-righteous">Account Settings</Title>
                <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 grid-cols-1 w-full gap-4 mt-4">
                    {inputs.map((input) => (
                        <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
                    ))}
                </div>
                <div className="text-right">
                    <button className="btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}