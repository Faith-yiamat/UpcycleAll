import './index.css'


const Contacts = () =>{
    return(
        <div className='allcontact'>
            <h1 className='h1'>CONTACT US</h1>
            <div className='contacts'>
                <div className='details'>
        <p className='paragraph'>Phone: +255 988 789 900</p>
        <p className='paragraph'>E-mail: upcycleit@gmail.com</p>
        <p className='paragraph'>Location: Nairobi,Karen</p>
        </div>
        <img src = "imag/map.png" alt="map" className='map'/>
        </div>
        

         <div className='footer'>
        <div className='contactus'>
            <fig>
          <img src = "/imag/instagram.png" alt="instagram" id='icon'/> 
          <figcaption>@upcycleitofficial</figcaption>
          </fig>
          <fig>
          <img src ="/imag/linkedin.png" alt="linkedin" id='icon'/>
          <figcaption>@upcycleIt_Official</figcaption>
          </fig>
          <fig>
          <img src ="/imag/facebook.png" alt="facebook" id='icon'/>
          <figcaption>@upcycleIt_Official</figcaption>
          </fig>
          <fig>
          <img src="/imag/twit.png" alt='twitter' id='icon'/>
          <figcaption>@upcycleIt_Official</figcaption>
          </fig>
          </div>
         
        <p className='paragraph'>@2024UPCYCLEIT | ALL RIGHTS PRESERVED</p>
         </div>
        
       
       
       
       
       
        </div>

    )
}
export default Contacts;