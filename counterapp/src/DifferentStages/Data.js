export default function Data({ level }){

    const differentTexts = [
        "Learn JavaScript",
        "Learn ReactJs",
        "Paisa Hi Paisa Hoga"
    ]


    return (
        <div style={{ textAlign: 'center', color: "white"}}>
            {differentTexts[level - 1]}
        </div>

    )
}