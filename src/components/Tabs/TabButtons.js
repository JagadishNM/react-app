export default function TabButtons({tabData,setActiveTab}){

    function changeTab(index){
        setActiveTab(index)
    }
    return (
        <>
            {tabData.map((data,i) =>(
                <button key={data.name} onClick={() => changeTab(i)}>{data.name}</button>
            ))}
        </>
    )
}