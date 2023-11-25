import AboutPageImage from "../Assets/Images/ImageOne.png";

function AboutUs() {
  return (
    <>
        <div className="pl-20 pt-20 flex flex-col text-white">
            <div className="flex items-center gap-5 mx-10">
                <section className="w-1/2 space-y-10">
                    <h1 className="text-5xl text-yellow-500 font-semibold">
                        Quality Education
                    </h1>
                    <p className="text-xl text-gray-200">
                        Our goal is to provide quality education to the world. 
                        We are providing the platform for the aspiring teachers and students to share
                        their skills, creativity and knowledge to each other to empower and contribute
                        in the growth and wellness of mankind.  
                    </p>
                </section>
                
                <div className="w-1/2">
                <img
                    id="test1"
                    style={{
                        filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                    }}
                    alt="about main image"
                    className="drop-shadow-2xl"
                    src={ AboutPageImage }
                />
                </div>           
            </div>
        </div>

    </>  
  )
}

export default AboutUs