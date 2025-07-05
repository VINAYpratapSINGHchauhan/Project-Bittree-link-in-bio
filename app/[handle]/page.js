import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function Page({ params }) {
    const p = (await params)
    const handle = decodeURIComponent(p.handle);
    const client = await clientPromise;
    const db = client.db("BitTree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })
    if(!item){
        return notFound()
    }

   return (
        <div className="flex min-h-screen bg-purple-300 justify-center items-center ">
            {item && <div className="photo  flex justify-center flex-col items-center gap-2">
                <img src={item.pic} alt="" className="rounded-full" />
                <span className="font-bold text-xl">@{item.handle}</span>
                <div className="links flex gap-2">
                    {item.links.map((item, index) => {
                        return <div className="shadow-lg bg-purple-50 py-4  rounded-md my-2 min-w-60  flex justify-center font-meduim" key={index}>

                            <Link href={item.link} >{item.linktext}</Link>
                        </div>

                    }
                    )}
                </div>
            </div>}


        </div >
    );
}