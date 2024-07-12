import './case.css';

function CaseStudies(){
    return(
       <div>
        <h1>Case Studies Project Review</h1>
        <br/>
        <h2>Inota</h2>
        <div className='project'>
            <img src='./Imagefol/DeWatermark.ai_1718134937972.png' className='inotaImage'/>
            <p>
            Inota is a credit scoring system that offers alternative collateral for Saccos. 
            We collect data from the dairy farmers like <br/> mile collections, savings, regular bills and 
            livestock for loss mitigation to give them a score. The aim is to eliminate the <br/> need of 
            guarantors by farmers during application and give them feedback on rejected loans. 
            The system leverages<br/> machine learning to train a model that is accurate and efficient

            <button className='view-button'>View Details</button>

            </p>

        </div>
        <h2>UpcycleIt</h2>
        <div className='upcycle-project'>
            <img src='./Imagefol/upcycle2.jpg' className='upcycleImage'/>
            <p>
            UpcycleIt is a gamified application of the products that helps youths get 
            an awareness of upcycling <br/>and use it in real life. This project is to help
             reduce the dumping of clothes in our society. Our approach <br/>is centered around
             creating an intuitive and user-friendly interface that educates users about the benefits <br/>
             of upcycling and provides them with the tools to participate in the process.








            <button className='view-button'>View Details</button>

            </p>

        </div>

        <h2>Xomi</h2>
        <div className='xomi-project'>
            <img src='./Imagefol/Screenshot from 2024-07-12 07-55-25.png' className='xomiImage'/>
            <p>
            Our educational app offers a personalized experience for students. Upon logging<br/>
            in, students can access specific sections of a book, handpicked by their teacher.
            Once <br/>they have read the assigned topic, students can test their understanding
            by taking a quiz <br/>tailored by their teacher. After completing the quiz,it 
            will be promptly graded and students <br/>can compare their performance with their 
            peers using a ranking feature. This ranking feature will <br/>display students' usernames, 
            which they can create during their profile setup, ensuring their anonymity.

            <button className='view-button'>View Details</button>

            </p>

        </div>

        <h2>Apex Simulation</h2>
        <div className='apex-project'>
            <img src='./Imagefol/apexxx.avif' className='apexImage'/>
            <p>
            Apex Simulation equips teachers of visually impaired students with technical skills on
             how to use assistive technologies.<br/>Our main aim was to ensure the continuation of learning
             the currently available assistive technologies. The teachers are <br/>provided with scenario-based
              in case of another pandemic. Apex Simulation provides a gamified simulation that mimics<br/>
             the currently available assistive technologies. The teachers are be provided with scenario-based
              questions related to <br/>situations they may encounter in class, and will be required to answer said 
              questions through the simulation.

            <button className='view-button'>View Details</button>

            </p>

        </div>



        <button className='back-button'>Back</button>





       </div> 
    );
}

export default CaseStudies;