import Titlenav from './Titlenav.js'
import Pagenav from './Pagenav.js'
import './nav.css'

export default function FullNav() {
  return (
      <div id="full">
          <Titlenav />
          <Pagenav />
      </div>
  )
}
