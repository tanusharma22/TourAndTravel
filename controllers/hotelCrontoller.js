const Hotel =require("../model/hotel.model")
const gethotelhHandler=async (req,res)=>{
    const hotelcategory= req.query.category
    try{
        let hotels
        if(hotelcategory)
        {
            hotels=await Hotel.find({category:hotelcategory})
        }
        else{
            hotels=await Hotel.find({});
        }
        
        hotels ? res.json(hotels) :res.status(404).json({message:"No data found"})
    }catch(err){
        console.log(err)
    }
}

module.exports=gethotelhHandler