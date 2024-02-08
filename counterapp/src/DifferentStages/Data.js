export default function Data({ level }){

    const differentTexts = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
    ]


    return (
        <div style={{ textAlign: 'center', color: "red", fontSize: "25px"}}>
            {differentTexts[level - 1]}
        </div>

    )
}