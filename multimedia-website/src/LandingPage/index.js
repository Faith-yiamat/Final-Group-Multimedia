import './index.css';

function LandingPage(){
    return(
        <div>
            <div className='body'>


                <div className='landingPage'>
            
                    <div>
                        <div className='background-image'>
                    </div>
                    <div className='landing-page-texts'>
                
                       <p>Welcome To Our Multimedia Project</p>

                    </div>
                    </div>

                </div>


                <div>
                    <section>
                        <h1>Video</h1>
                        <div className='video-section'>
                            <img src='Images/xlogo.png' alt='X-Logo' className='xLogo'/>
                            
                            <p>
                            On this episode of 'How Things Work' , we focus on X.
 
                            Previously known as Twitter, we'll discuss from how 
 
                            it was developed, the architecture, impact and so much
 
                            more
                        </p>

                        </div>
                   

                    </section>


                </div>


                <div className='writing'>
                    <section>
                    <h1>Writing</h1>
                        <div className='writing-section'>                            
                            <p>
                            This section is about the book

                            'Born A Crime' by Trevor Noah

                            and a glimpse of what our case

                            studies are all about <a href=''> View Blog</a>
                           </p>
                            

                           <img src='Images/writing.png' alt='X-Logo' className='writing-image'/>

                        </div>
                        
                    </section>
                </div>
            </div>
         </div>
    )
}

export default LandingPage;