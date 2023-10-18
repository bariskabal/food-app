import { campaigns } from "@/mock"
import Title from "../ui/Title"
import Campaign from "./Campaign"

export default function Campaigns() {
    return(
        <div className="py-8 md:container md:mx-auto mx-5">
            <div className="flex justify-center">
                <Title className="text-5xl font-bold font-chelsea text-primary">Campaigns</Title>
            </div>
            <div className="flex justify-between flex-col md:flex-row py-24 gap-5">
                {campaigns.map((item,index) => (
                    <Campaign item={item} key={index}/>
                ))}
            </div>
        </div>
        
    )
}
