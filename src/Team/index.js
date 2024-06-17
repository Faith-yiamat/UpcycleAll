import './index.css'
const Team = ()=>{
    return(
    
        <div className='team'>
         <h1>Our Team</h1>
       <p>Our Team consists of experts in design and engineering. <br/>
        We are dedicated to creating an app that not only helps user upcycle <br/>
        but also educates them on the importance of sustainability</p>
        
        
        <div id='pictures'>
            
            
            <div className='jemimahYvonne'>

        <div id='jemimah'>
            <fig>
            <img src="/images/Jemimah.jpg" alt=''/>
            <figcaption>Jemimah Nthenya</figcaption>
            <figcaption><b>Software Developer</b></figcaption>
            </fig>
        </div>

         <div id='yvonne'>
            <fig>
            <img src='/images/leila.jpg' alt=''/>
            <figcaption>Yvonne Martin</figcaption>
            <figcaption><b>Software Developer</b></figcaption>
           
            </fig>
            </div>
            </div>




            
            <div id='fanny'>
            <fig>
            <img src='/images/Fanny.jpg' alt=''/>
            <figcaption>Fanny Ingabire</figcaption>
            <figcaption><b>Software Developer</b></figcaption>
            </fig>
            </div>

            <div className='rehema'>
            <div id='rehema'>
            <fig>
            <img src='/images/Rehema.jpg' alt=''/>
            <figcaption>Rehema Funani</figcaption>
            <figcaption><b>Software Developer</b></figcaption>
           
            </fig>
            </div>
            

            <div id='yiamat'>
            <fig>
            <img src='/images/Yiamat.jpg' alt=''/>
            <figcaption>Faith Yiamat</figcaption>
            <figcaption><b>Software Developer</b></figcaption>
            </fig>
            </div>
            </div>
           
        </div>
        <p>Join the upcycle it community today and start trasforming waste into something new and creative. <br/>Download our app and share your upcycling stories<br/>
        with us!  </p>
        </div>
    

    );
}
export default Team