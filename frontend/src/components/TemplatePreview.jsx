import { Link } from "react-router-dom"
import template1 from "../assets/template1.webp"
import template2 from "../assets/template2.webp"


function TemplatePreview() {

  return (

    <section style={{padding:"120px 20px", backgroundColor:"rgb(254 202 202)",textAlign:"center"}}>

      <h2 className="font-semibold text-4xl italic">Popular Marriage Biodata Designs</h2>

      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"40px",
        marginTop:"40px",
        flexWrap:"wrap"
      }}>

        <Link to="/create-biodata"className="relative group inline-block">
        <img
        src={template1}
        alt="template1"
        width="200"
        className="cursor-pointer hover:scale-105 transition"
        />
        <span className="absolute inset-0 flex items-center justify-center 
         bg-black/40 text-white font-semibold opacity-0 group-hover:opacity-100 transition italic text-3xl">
         Edit
         </span>
        
        </Link>

        <Link to="/create-biodata"className="relative group inline-block">
         <img
         src={template2}
         alt="template2"
         width="200"
         className="cursor-pointer hover:scale-105 transition"
         />
         <span className="absolute inset-0 flex items-center justify-center 
         bg-black/40 text-white font-semibold opacity-0 group-hover:opacity-100 transition italic text-3xl">
         Edit
         </span>
        </Link>
      </div>

    </section>

  )
}

export default TemplatePreview

