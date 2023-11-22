import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { useState } from "react";

export default function Footer() {

    const [linkAddress, setlinkAddress] = useState("")
    const [iconName, setIconName] = useState("")
    const [icons, setIcons] = useState(["facebook","twitter","linkedin"])

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            location: "",
            email: "",
            phoneNumber: "",
            desc: "",
            day: "",
            time: ""
          },
          onSubmit,
          validationSchema: footerSchema,
        });

    const inputs = [
        {
          id: 1,
          name: "location",
          type: "text",
          placeholder: "Your location",
          value: values.location,
          errorMessage: errors.location,
          touched: touched.location,
        },
        {
          id: 2,
          name: "email",
          type: "text",
          placeholder: "Your Email",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 3,
          name: "phoneNumber",
          type: "number",
          placeholder: "Your Phone Number",
          value: values.phoneNumber,
          errorMessage: errors.phoneNumber,
          touched: touched.phoneNumber,
        },
        {
          id: 4,
          name: "desc",
          type: "text",
          placeholder: "Your desc",
          value: values.desc,
          errorMessage: errors.desc,
          touched: touched.desc,
        },
        {
          id: 5,
          name: "day",
          type: "text",
          placeholder: "Update day",
          value: values.day,
          errorMessage: errors.day,
          touched: touched.day,
        },
        {
          id: 6,
          name: "time",
          type: "text",
          placeholder: "Update Time",
          value: values.time,
          errorMessage: errors.time,
          touched: touched.time,
        }
      ];


    return(
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-y-10">
            <Title className="text-5xl lg:text-start text-center font-righteous">Footer Settings</Title>
            <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 grid-cols-1 w-full gap-4 mt-4">
                {inputs.map((input) => (
                    <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
                ))}
            </div>
            <div className="flex lg:flex-row gap-4 flex-col justify-between mt-4 items-center">
                <div className="flex items-center gap-4">
                    <Input placeholder="Link Address" value="https://" onChange=""/>
                    <Input placeholder="Icon Name" defaultValue="fa fa-" onChange={(e) => setIconName(e.target.value)} value={iconName}/>
                    <button className="btn-primary" type="button" onClick={() => {setIcons([...icons,iconName]); setIconName("")}}>Add</button>
                </div>
                <ul className="flex items-center gap-4">
                    {icons.map((icon,index) => (
                       <li key={index} className="flex items-center">
                            <i className={`fa fa-${icon} text-2xl`}></i>
                            <button className="text-danger" type="button" onClick={() => setIcons((prev) => prev.filter((i) => i !== icon ))}>
                                <i className="fa fa-trash text-xl ml-2"></i>
                            </button>
                        </li> 
                    ))}
                </ul>
            </div>
            <div className="text-right">
                <button className="btn-primary" type="submit">Update</button>
            </div>
        </form>
    )
}