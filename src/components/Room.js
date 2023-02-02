

const Room = () => {
    return (
        <div className='featured'>
        <h2 class=" flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-black-600 mb-24">Dj banglow</h2>
       
        <div className='container1'>
            <img className='span-3 image-grid-row-2' src='/house1.jpg' alt='' />
            <img src='/bed1.jpg' alt='' />
            <img src='/bed2.jpg' alt='' />
            <img src='/kitchen.jpg' alt='' />
            <img src='/Bathroom.jpg' alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>123 Acme St. Dallas, TX</h2>
                    <p>House for Sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathrooms:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathrooms:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
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