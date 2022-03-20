import User_Model from "../Models/User"


export const Fetch_All_Users = async (req,res) => {
    const {Count} = req.params;
    const limit = 10;
    try{
        const FetchUser = await User_Model.find({},{UserName:1,Email:1}).limit(limit + Count);
        if(!FetchUser) return res.status(400).json({msg:"No Data Avalibele",Success:false})
        var ar = [];
        FetchUser.map((item) => {
           
            if(!item._id.equals(req.User._id)){
                ar.push(item)
            }
        })

    
        res.status(200).json({data:ar,Success:true})
      
    }catch(error){
        console.log(error)
    }
}




export const FetchOneUser = async (req,res) => {
    const {id} = req.params

    try {
        const  User = await User_Model.findById(id);
        if(!User) return res.status(400).json({msg:"User No Avalible",Success:false});

        return res.status(200).json({data:User,Success:true})

    } catch (error) {
        console.log(error)   
    }
}