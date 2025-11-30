import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function SwitchBtn() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 700);

  useEffect(() => {
    const resize = (): void => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const to: string = location.pathname === "/" ? "/Signuppage" : "/";

  return isMobile ? (
    <p className="switch-link-p">
        Don,t have an accont? {""}
        <Link to={to} className="switch-link">
            {location.pathname === "/" ? "SIGNUP" : "LOGIN"}
        </Link> 
    </p>
    
  ) : (
    <button onClick={() => navigate(to)} className="switch-Btn">
      {location.pathname === "/" ?"SIGNUP" : "LOGIN"}
    </button>
  );
}
