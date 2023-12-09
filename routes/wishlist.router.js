const express=require('express')
const router= express.Router();
const wishlist =require('../model/wishlist.model')

router.route("/")
    .post(async (req,res)=>{
        const newWishlist= new  wishlist(req.body);
        try{
            const savedWishlist=await newWishlist.save();
            res.status(201).json(savedWishlist);

        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"failed to create wishlist"})
        }
    })

    router.route("/:id")
        .delete(async (req,res) =>{
            try{
                await wishlist.findByIdAndDelete(req.params.id);
                res.json({ message: "Hotel Deleted From Wishlist"})
            }catch(err){
                res.status(500).json({ message: "Could not delete hotel from wishlist" })
            }
        })

    module.exports=router;

    router.route("/")
        .get(
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