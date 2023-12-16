const wishlist =require('../model/wishlist.model')
const wishlistHandler=async (req,res)=>{
    const newWishlist= new  wishlist(req.body);
    try{
        const savedWishlist=await newWishlist.save();
        res.status(201).json(savedWishlist);

    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"failed to create wishlist"})
    }
}
module.exports=wishlistHandler