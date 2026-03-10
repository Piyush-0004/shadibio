import personaldetail from "../assets/personaldetail.webp"
import familydetail from "../assets/familydetail.webp"
import contactdetail from "../assets/contactdetail.webp"
import personalimage from "../assets/personalimage.webp"

function Steps() {
  return (
    <div className="max-w-8xl mx-auto p-10 space-y-20 bg-red-200">
      <div>
      <h1 className="text-center text-5xl font-bold italic">How to Create a Marriage Biodata</h1>
      <p className="text-center text-3xl mt-7">Step-by-Step Marriage Biodata Creation Process</p>
      <p className="text-center text-xl mt-3">Just follow a few easy steps, and you'll be ready to proceed</p>
      </div>

      {/* STEP 1 */}

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img src={personaldetail} alt="personaldetail" className="w-56" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Step 1</h2>
          <br/>
          <h1 className="font-bold">Enter your Personal Information</h1>
          <p className="text-gray-800 mt-3">
            In this section, add your personal details. Make a good page about yourself to find a life partner. Write your full name, what you believe in, your birthday, and how tall you are. Tell about your school, what you learned, and any prizes you won. Share what jobs you had and what you did. Lastly, write about things you like to do, like games or hobbies. This page will help others know you better.
          </p>
        </div>

      </div>


      {/* STEP 2 */}

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-2xl font-bold">Step 2</h2>
          <br/>
          <h1 className="font-bold">Add Your Family Details</h1>
          <p className="text-gray-800 mt-3">
            Proceed by adding your family details to the next step. Tell us about your family. Share what your family believes in, where they come from, and their traditions. Write down your parents' names, what they do for work, and any special things they have done. Tell how many brothers and sisters you have and what they do for school or work. We will help you write this down in an easy way.
          </p>
        </div>

        <div>
          <img src={familydetail} alt="familydetail" className="w-56" />
        </div>

      </div>


      {/* STEP 3 */}

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img src={contactdetail} alt="contactdetail" className="w-56" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Step 3</h2>
          <br/>
          <h1 className="font-bold">Add Your Contact Details</h1>
          <p className="text-gray-800 mt-3">
            Share your contact details like phone number, email address, and preferred social media handles for easy communication. Include your or your parent/guardian's contact information to allow potential matches and their families to connect effortlessly. Ensure all details are accurate and up-to-date for smooth communication.
          </p>
        </div>

      </div>


      {/* STEP 4 */}

      <div className="grid md:grid-cols-2 gap-10 items-center ">

        <div>
          <h2 className="text-2xl font-bold">Step 4</h2>
          <br/>
          <h1 className="font-bold">Personalize Your Biodata with Your Photo</h1>
          <p className="text-gray-800 mt-3">
            A great photo can really boost your marriage profile. First impressions matter, and a good picture can help you find the perfect match faster. Choose a clear, recent photo that shows your personality. Your profile picture is like a digital first meeting, so make it count! People often judge based on photos, so make yours the best representation of you.
          </p>
        </div>

        <div>
          <img src={personalimage} alt="personalimage" className="w-56" />
        </div>

      </div>

    </div>
  )
}

export default Steps