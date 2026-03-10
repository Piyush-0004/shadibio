import { useState } from "react"
import { calculateAge } from "../utils/AgeCalculator"
import Navbar from "../components/Navbar"

function BiodataForm() {

const [formData,setFormData] = useState({
name:"",
dob:"",
age:"",
religion:"",
education:"",
profession:"",
fatherName:"",
motherName:"",
caste:"",
height:"",
photo:null
})

const handleChange = (e)=>{
const {name,value}=e.target

if(name==="dob"){
const age = calculateAge(value)

setFormData({
...formData,
dob:value,
age:age
})
}
else{
setFormData({
...formData,
[name]:value
})
}
}

const handlePhoto = (e)=>{
const file=e.target.files[0]

setFormData({
...formData,
photo:URL.createObjectURL(file)
})
}

return (

<>
<Navbar/>

<div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8">

{/* FORM */}

<div className="space-y-6">

<h2 className="text-2xl font-bold">Create Biodata</h2>

{/* PERSONAL INFORMATION */}

<div className="bg-red-100 shadow-xl rounded-xl p-5 space-y-4">

<h3 className="font-semibold text-lg border-b pb-2">
Personal Details
</h3>

<input
className="w-full border p-2 rounded"
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="date"
name="dob"
onChange={handleChange}
/>

<p className="text-sm text-gray-600">
Age: {formData.age}
</p>

<input
className="w-full border p-2 rounded"
type="text"
name="religion"
placeholder="Religion"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="caste"
placeholder="Caste"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="height"
placeholder="Height"
onChange={handleChange}
/>

</div>


{/* FAMILY INFORMATION */}

<div className="bg-red-100 shadow-xl rounded-xl p-5 space-y-4">

<h3 className="font-semibold text-lg border-b pb-2">
Family Details
</h3>

<input
className="w-full border p-2 rounded"
type="text"
name="fatherName"
placeholder="Father Name"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="fatheroccupation"
placeholder="Father Occupation"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="motherName"
placeholder="Mother Name"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="motheroccupation"
placeholder="Mother Occupation"
onChange={handleChange}
/>

</div>

{/*Contact Infromation */}

<div className="bg-red-100 shadow-xl rounded-xl p-5 space-y-4">

<h3 className="font-semibold text-lg border-b pb-2">
Contact Information
</h3>

<input
className="w-full border p-2 rounded"
type="text"
name="contactno"
placeholder="Contact No"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="fatherno"
placeholder="Father's Contact No"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="motherno"
placeholder="Mother Contact No"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="address"
placeholder="Address"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="emailid"
placeholder="Email Id"
onChange={handleChange}
/>

</div>

{/* EDUCATION */}

<div className="bg-red-100 shadow-xl rounded-xl p-5 space-y-4">

<h3 className="font-semibold text-lg border-b pb-2">
Education
</h3>

<input
className="w-full border p-2 rounded"
type="text"
name="education"
placeholder="Highest Qualification"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="profession"
placeholder="Profession"
onChange={handleChange}
/>

</div>


{/* HOROSCOPE */}

<div className="bg-red-100 shadow-xl rounded-xl p-5 space-y-4">

<h3 className="font-semibold text-lg border-b pb-2">
Horoscope
</h3>

<input
className="w-full border p-2 rounded"
type="text"
name="rashi"
placeholder="Rashi"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="nakshatra"
placeholder="Nakshatra"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="gotra"
placeholder="Gotra"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="timeofbirth"
placeholder="Time of Birth"
onChange={handleChange}
/>

<input
className="w-full border p-2 rounded"
type="text"
name="placeofbirth"
placeholder="Place of Birth"
onChange={handleChange}
/>

</div>


{/* PHOTO */}

<div className="bg-red-100 shadow-xl rounded-xl p-5 space-y-4">

<h3 className="font-semibold text-lg border-b pb-2">
Upload Photo
</h3>

<input
type="file"
accept="image/*"
onChange={handlePhoto}
/>

</div>

</div>


{/* PREVIEW */}


<div style={{ width:"550px",}}className="bg-pink-50 shadow-2xl rounded-xl p-6  h-fit">

<h2 className="text-xl font-bold mb-4 text-center">
Biodata Preview
</h2>

{formData.photo && (

<img
src={formData.photo}
className="w-32 h-32 object-cover rounded mb-4"
/>

)}

<h1 className="bg-amber-100 italic">Personal Information</h1>
<p><b>Name:</b> {formData.name}</p>
<p><b>Age:</b> {formData.age}</p>
<p><b>Religion:</b> {formData.religion}</p>
<p><b>Caste:</b> {formData.caste}</p>
<p><b>Height:</b> {formData.height}</p>

<br/>

<h1 className="bg-amber-100 italic">Family Information</h1>
<p><b>Father:</b> {formData.fatherName}</p>
<p><b>Father Occupation:</b> {formData.fatheroccupation}</p>
<p><b>Mother:</b> {formData.motherName}</p>
<p><b>Mother Occupation:</b> {formData.motheroccupation}</p>

<br/>

<h1 className="bg-amber-100 italic">Family Information</h1>
<p><b>Contact No:</b> {formData.contactno}</p>
<p><b>Father Contact No:</b> {formData.fatherno}</p>
<p><b>Mother Contact No:</b> {formData.motherno}</p>
<p><b>Address:</b> {formData.address}</p>
<p><b>Email Id:</b> {formData.emailid}</p>

<br/>

<h1 className="bg-amber-100 italic">Education Details</h1>
<p><b>Highest Education:</b> {formData.education}</p>
<p><b>Profession:</b> {formData.profession}</p>

<br/>

<h1 className="bg-amber-100 italic">Horoscope</h1>
<p><b>Rashi:</b> {formData.rashi}</p>
<p><b>Nakshtra:</b> {formData.nakshtra}</p>
<p><b>Gotra:</b> {formData.gotra}</p>
<p><b>Time of Birth:</b> {formData.timeofbirth}</p>
<p><b>Place of Birth:</b> {formData.placeofbirth}</p>


</div>

</div>

</>
)
}

export default BiodataForm