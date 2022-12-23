import { Footer } from "./HomeConfig";
import { FileUploader } from "react-drag-drop-files";
import { increment } from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {
  Modal ,
  doc ,
  getDocs,
  where,
  query,
  updateDoc,
  useEffect ,
  useState ,
  getDoc ,
  getFirestore ,
  collection ,
  addDoc ,
  Input ,
  app ,
  useParams ,
  Header ,
  Button 
} from "./TokenConfig"
import { useSelector } from "react-redux";
import StopWatch from "../Re-useable/StopWatch";

function UserToken() {
  const [tokenId,setTokenId] = useState()
  const time = useSelector(state => state.TimeReducer.time)
  useEffect(()=>{
    
  },[])
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const storage = getStorage(app)


  const fileTypes = ["JPG", "PNG", "GIF"];


  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);

  } 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    let [tokenUpdate,setTokenUpdate] = useState()
    const [data,setData] = useState('');
   useEffect(()=>{
    setTimeout(async ()=>{
      console.log(tokenId);
      console.log(id)

      const userID = JSON.parse(localStorage.getItem("User"))
      const q = query(collection(db, `/Company/${id}/Tokens/${tokenId}/TokenBuyer`), where("userID", "==", userID.uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log({id:doc.id,... doc.data()});
        setData(doc.data().TokenNo)
        console.log(data)
        
      });
     


      const docRef = doc(db, `/Company/${id}/Tokens/${tokenId}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setTokenUpdate(docSnap.data().CounterToken)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

        console.log(data);
        console.log(tokenUpdate);
         
    
      const washingtonRef = doc(db, `/Company/${id}/Tokens/${tokenId}`);

     
       updateDoc(washingtonRef, {
        CounterToken:increment(1)  
      });


      // if(data === tokenUpdate ) {
      //   alert("Your Token")
      // }



     
     




    },10000)
   },[tokenUpdate])

    // async function updateTokens () {
     


    // }



    const db = getFirestore(app)
    const [single,setSingle] = useState([]);

    const {id} = useParams();
    
    const [url,setUrl] = useState();
      async function addToken(Name,email,Token){
        console.log(url)
        const loginUser = JSON.parse(localStorage.getItem("User"))
        const docRef = await addDoc(collection(db, `/Company/${id}/Tokens/${tokenId}/TokenBuyer`), {
          name: Name,
          Email: email,
          Image:url,
          TokenNo:Token+1,
          userID:loginUser.uid
        });
        console.log(docRef)
      }


    useEffect(()=>{
        getDsata()
    },[])

 async    function getDsata(){
        const docRef = doc(db, "Company", id);
        const docSnap = await getDoc(docRef);
        const d = []
        if (docSnap.exists()) {
        d.push(docSnap.data())
        setSingle(d)
        } else {
        // doc.data() will be undefined in this case
        }
    }






 
    //  ======================= Add Token Info ==============================
    async function uploadImage(image) {

      const storageRef = ref(storage, `Token/${image.name}`)
      const snapshot = await uploadBytes(storageRef, image)
      const url = await getDownloadURL(snapshot.ref)
      setUrl(url)
    }
  


    useEffect(()=> {
        token()
    })


    const [tokess,setToken] = useState([])

    const token = async() =>{
      const docRef = doc(db, `/Company/${id}/Tokens/Tokens${id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTokenId(docSnap.id)
        setToken(docSnap.data())
      } else {
        
      }


    }




    // =====================================================================================
    const [updateToken,setupdate] = useState(tokess.TotalTokens)
    const [Name,setName] = useState();
    const [email,setEmail] = useState()
     

    const update = async() =>{
      
    console.log()
    uploadImage(file)
    addToken(Name,email,Number(tokess.TotalTokens))      
   

      if(time  === "11:59:00 PM"){
        const washingtonRef = doc(db,  `/Company/${id}/Tokens/Tokens${id}`);

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
          TotalTokens:0
        });
  
      }
     
      const washingtonRef = doc(db,  `/Company/${id}/Tokens/Tokens${id}`);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        TotalTokens:tokess.TotalTokens != tokess.start_token ? Number(tokess.TotalTokens) + 1 :"Token is full"
      });


    }


    const Reset = async()=>{
      const washingtonRef = doc(db,  `/Company/${id}/Tokens/Tokens${id}`);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        TotalTokens:0
      });

    }

   

   



  return (
    <div>
      <Header/>





      <div className="cards relative w-full h-[500px] border-2 border-black grid grid-rows-1 grid-cols-2 place-items-center">


      <div class="card" style={{width:"18rem"}}>
    <ul class="list-group list-group-flush">
        {single.map((item)=>{
            return (
                <>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Company Name: </span>  {item.Company_Name}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Opening Time: </span>  {item.Start_timing}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Ending Time:  </span> {item.End_Time}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Starting Year </span> {item.StartingYear}</li>
                </>
            )
        })}
       
    </ul>

  



    </div>
    



    
    <div class="w-[250px]  h-[150px] ">
    <StopWatch/>
    <Button className="w-full bt btn btn-primary " onClick={tokess.TotalTokens !== tokess.start_token ?showModal:""}>Update Token</Button>
         <p className='text-4xl font-black text-center'>{tokess.TotalTokens !== tokess.start_token ? tokess.TotalTokens :"Token is full"}</p>
    </div>


      </div>






      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <div className='w-[100%] h-[300px] border-2 border-black flex flex-col justify-around items-center'>
            {/* <Input type="file" onChange={(e)=> setImagePatient(e.target.files[0].name)} placeholder="Upload Image"/> */}

            <div className="image" style={{width:'100%',height:"100%",border:"2px solid black"}}>
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
              <Input type="text" onClick={(e)=>setName(e.target.value)} className="mt-2 mb-2" placeholder="Enter Your Name "/>
              <Input type="text" onClick={(e)=>setEmail(e.target.value)} className="mt-2 mb-2" placeholder="Enter Your Email "/>
            </div>

            <Button onClick={update}>Add Token</Button>
      </div>

      </Modal>

      <Footer/>
    </div>
  )
}

export default UserToken