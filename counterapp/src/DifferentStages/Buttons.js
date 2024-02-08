export default function Buttons({ setLevel, level }){

console.log(setLevel, "setLevel")
const previous = () => {
    if(level == 1){
        setLevel(3)
        console.log(setLevel, "setLevel")
    } else {
        setLevel(level - 1)
        console.log(setLevel, "setLevel1")
    }
}

const next = () => {
    if(level == 3){
        setLevel(1)
    } else{
        setLevel((previous) => previous + 1)

    }
}


return (
    <div style={{display: 'flex', justifyContent: "space-around"}}>
        <button style={{fontSize: 40,}} onClick={previous}>Previous</button>
        <button style={{fontSize: 40,}} onClick={next}>next</button>

    </div>
    )

}