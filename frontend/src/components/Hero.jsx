import { Link } from "react-router-dom"

function Hero() {
  return (

    <section style={{
      textAlign:"center",
      padding:"100px 20px",
      background: "rgb(249 168 212)"
    }}>

      <h1 className="font-bold text-6xl italic">Create Your Perfect Marriage Biodata Online – Free Templates</h1>

      <p className="mt-7 text-2xl">Design your marriage bio data easily with our free templates and online maker. Find the perfect biodata format for your ideal match!</p>

      <Link to="/create-biodata">
        <button style={{
          marginTop:"40px",
          padding:"12px 25px",
          background:"#e91e63",
          color:"#fff",
          border:"none",
          borderRadius:"5px",
          fontSize:"16px",
          cursor:"pointer"
        }}>
          Create Biodata
        </button>
      </Link>

    </section>

  )
}

export default Hero