import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservation";

export default function Reservation() {

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
          validationSchema: reservationSchema,
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
          name: "persons",
          type: "number",
          placeholder: "How Many Persons?",
          value: values.persons,
          errorMessage: errors.persons,
          touched: touched.persons,
        },
        {
          id: 5,
          name: "date",
          type: "datetime-local",
          value: values.date,
          errorMessage: errors.date,
          touched: touched.date,
        },
      ];

    return(
        <div className="container mx-auto py-6">
            <Title className="text-[2.5rem] font-chelsea mb-10">Book a Table</Title>
            <div className="flex justify-between flex-wrap-reverse items-center gap-10">
                <form onSubmit={handleSubmit} className="lg:flex-1 w-full">
                    <div className="flex flex-col gap-y-3">
                        {inputs.map((input) => (
                            <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        ))}
                    </div>
                    <button className="btn-primary mt-4">Book Now</button>
                </form>
                <div className="lg:flex-1 h-[384px] w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5273.311297530503!2d26.401892062263254!3d40.14699295999324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1697712119943!5m2!1str!2str" allowFullScreen="" loading="lazy" className="w-full h-full" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}