import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1/ecommerceIncognita`)
//const connectToDataBase = async () =>{
 //   await mongoose.connect(process.env.MONGODB_URI,{dbName:'ecommerceIncognita'})
  //  try{
   //     console.log("Conectado exitosamente")
   // }catch(err){
   //     console.log("No conectado "+err)
  //  }
//};

export default mongoose;



