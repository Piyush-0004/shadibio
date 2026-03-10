import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px 40px",
      background:"rgb(251 207 232)",
      boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
      position:"sticky",
      top: "0",
    }}>

      <Link to="/" style={{color:"#e91e63"}} className="font-bold text-2xl">ShaadiBio</Link>

      <div>
        <Link to="/login">
          <button style={{
          background:"#e91e63",
          color:"#fff",
          border:"2px #e91e63",
          padding:"8px 18px",
          borderRadius:"6px",
          cursor:"pointer",
          marginRight:"20px",
         }}>
         Login
         </button>
       </Link>
        
        <Link to="/create-biodata">

          <button style={{
            background:"#e91e63",
            color:"#fff",
            border:"none",
            padding:"8px 18px",
            borderRadius:"6px",
            cursor:"pointer"
          }}>
            Create Biodata
          </button>

        </Link>

      </div>

    </nav>
  )
}

export default Navbar