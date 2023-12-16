const express=require('express')
const router= express.Router();
const wishlist =require('../model/wishlist.model')
const verifyuser=require('../middleware/verifyuser')
const wishlistHandler= require('../controllers/wishlistController')

router.route("/")
    .post(verifyuser,wishlistHandler)

    router.route("/:id")
        .delete(verifyuser,async (req,res) =>{
            try{
                await wishlist.findByIdAndDelete(req.params.id);
                res.json({ message: "Hotel Deleted From Wishlist"})
            }catch(err){
                res.status(500).json({ message: "Could not delete hotel from wishlist" })
            }
        })

    module.exports=router;

    router.route("/")
        .get(verifyuser,
            async (req, res) => {
                try{
                    const Wishlist = await wishlist.find({});
                    Wishlist ? res.json(Wishlist) : res.json({ message: "No items found in the wishlist"})
                }catch(err){
                    console.log(err)
                    res.status(500).json(err)
                }
            }
        )