
export default async function Dataapi() {
    const Fd= await fetch("http://localhost:5000/data")
    const data = await Fd.json();
    return (data)
}
