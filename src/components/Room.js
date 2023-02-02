import { useEffect,useState } from "react";
import Pano from "./Pano"
import Rating from "./Rating"


const Room = () => {
    const img='/p1.jpg'
    const [crime,setCrime]=useState({fact:'' ,RiskDetail:''})
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85639aa264msh863c6bd99267cbep14bd9djsn25fccea7ee7d',
            'X-RapidAPI-Host': 'crime-data-by-zipcode-api.p.rapidapi.com'
        }
    };

    useEffect(()=>{
    //     fetch('https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=94109', options)
	// .then(response => response.json())
	// .then(response => setCrime({...crime,fact:response.Overall.Fact,RiskDetail:response.Overall['Risk Detail']}))
	// .catch(err => console.error(err));
    },[])






    return (
        <div className='featured'>
        <h2 class=" flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-black-600 mb-24">123 Acme St. Dallas, TX</h2>
       
        <div className='container1'>
        <Pano className='span-3 image-grid-row-2' image={img}/>

            
            <img src='/bed1.jpg' alt='' />
            <img src='/bed2.jpg' alt='' />
            <img src='/kitchen.jpg' alt='' />
            <img src='/Bathroom.jpg' alt='' />
            <div className='span-3 img-details'>
               
                <div className='info-grid'>

                <div>
                        <div className='info'>
                            <p className='bold'>Address: 664 Atlantic Ave.anham, MD 20706</p>
                        </div>
                        
                    </div>

                <div className='info'>
                            <p className='bold'>A crime occurs every 1 hour 11 minutes (on average) in 94109.</p>
                           
                        </div>
                        <div className='info'>
                            <p className='bold'>A crime occurs every 1 hour 11 minutes (on average) in 94109.</p>
                           
                        </div>
                  
                    <div>
                       
                        
                        <div className='info'>
                            <p className='bold'>preffered tags:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Room type:</p><p>1BHK</p>
                        </div>
                        <div className='info'>
                        <Rating rating={4}/>
                        </div>
                      
                    </div>
                  
                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                
            </div>
        </div>

 
   
    </div>
    )
}

export default Room