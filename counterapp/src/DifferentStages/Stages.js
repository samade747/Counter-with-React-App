export default function Stages(){

const stagesNumber = [1, 2, 3]

return (
    <>
     <div>

        {
           stagesNumber.map(singleNum => (                        
            <p style={
                {
                backgroundColor: "blue",
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