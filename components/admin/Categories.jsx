import Input from "../form/Input";
import Title from "../ui/Title";
import { useState } from "react";
import { setIn } from "formik";

export default function Categories() {

    const [inputText, setInputText] = useState()
    const [categories, setCategories] = useState(["Pizza","bok"])

    return(
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title className="text-5xl lg:text-start text-center font-righteous">Category</Title>
            <div className="mt-6">
                <div className="flex gap-5 flex-1 items-center">
                    <Input placeholder="Add a new Category" onChange={((e) => setInputText(e.target.value))} value={inputText}/>
                    <button className="btn-primary" onClick={() => {setCategories([...categories,inputText]); setInputText("")}}>Add</button>
                </div>
                <div className="mt-10">
                    {categories.map((category,index) => (
                        <div key={index} className="flex justify-between py-2">
                            <b className="text-xl">{category}</b>
                            <button className="btn-primary !bg-danger !text-white" onClick={() => setCategories(categories.filter((cat) => cat !== category))}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}