import { Footer } from './HomeConfig';
import LoadingScreen from 'react-loading-screen';
import {
    getFirestore,
    useState,
    query ,
    collection,
    getDocs,
    app,useEffect,
    Header,
    Link
} from './TokenConfig'
import "./styles/index.css"
import { Input ,Button } from 'antd';
import { useSelector } from 'react-redux';

function Tokenuser() {
    const theme = useSelector(state=>state.ThemeReducer.theme)
    document.body.style.backgroundColor = theme
    const db = getFirestore(app)

    const [data,setData] = useState([]);
    const [searchTerm,setSearchTerm] = useState("")
    const [loading,setLoading] = useState(true)
    const results = async() =>{
        const q = query(collection(db, "Company"));
        const data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        data.push({id:doc.id,... doc.data()})
        setData(data)
        });
    }


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)

        results()
    },[])


  return (
    <div>
       

     
  
  {
    loading === true ?


<LoadingScreen
loading={true}
bgColor='#f1f1f1'
spinnerColor='#9ee5f8'
textColor='#676767'
text='Please wait us '
> 

</LoadingScreen>
:
<>
    <Header/>
        <div className="container-fluid h-[auto]  border-2 border-black flex flex-col justify-around items-center">


            <div className="Search">
                    <Input placeholder="Basic usage" onChange={(e)=> setSearchTerm(e.target.value)}/>
                
            </div>

                <div className="tableUser">
                                            <table class="table">
                            <thead>
                                <tr>
                       
                                <th scope="col">Company Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                  {   data.filter(val=>{
                                    if (searchTerm === ''){
                                        return val
                                    }
                                    else if (val.Company_Name.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return val
                                    }
                                  }).map((item)=>{
                return (
                    <tr key={item.id}>
                           <td> <p className='text-2xl font-black '>{item.Company_Name}</p></td>
                            <td><p className='text-2xl font-black '>{item.Country}</p></td>
                            <td><Link to={`/userToken/${item.id}`} className="btn btn-secondary">View</Link></td>
                    </tr>
    
                )
            })
                
            }
                            </tbody>
                            </table>

                </div>

        </div>


                <Footer/>
                </>
}
    </div>
  )
}

export default Tokenuser