import Titlenav from './Titlenav.js'
import Pagenav from './Pagenav.js'

export default class FullNav{
  render() {
    return (
        <div id="full">
            <Titlenav />
            <Pagenav />
        </div>
    )
  }
}
