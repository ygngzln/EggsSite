import Egg from "./egg.avif"
import Burger from "./burger.avif"
import Egg2 from "./egg2.avif"
import FullNav from "../FullNav.js"

export default function Header(){
  return (
    <>
      <FullNav />
      <div id="burgouter">
        <div id="burg">
          <header>
            Egg Burgers
          </header>

          <div id="img">
          <img src= {Egg} alt="Couldn't load" width="80" height="80" className="foodimg" style={{marginRight: '25px'}}></img>
          <img src= {Burger} alt="Couldn't load" width="80" height="80" className="foodimg" style={{marginRight: '25px'}}></img>
          <img src= {Egg2} alt="Couldn't load" width="80" height="80" className="foodimg" ></img>
          </div>
        </div>
      </div>
    </>
  )
}