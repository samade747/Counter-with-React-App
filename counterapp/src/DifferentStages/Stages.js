export default function Stages({ level }){

const stagesNumber = [1, 2, 3]

return (
    <>
     <div style={{display: "flex", justifyContent: "space-around"}}>

        {
           stagesNumber.map(singleNum => (                        
            <p style={
                {
                backgroundColor: level == singleNum ? "blue": "white",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                border: "20px solid yellow"
            }
            }>{singleNum}</p>
            ))
        }

      </div>         
    </>

)

}