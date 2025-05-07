// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onButtonClick = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    let bgClass
    let buttonText

    if (isDarkMode === true) {
      bgClass = 'dark-mode'
      buttonText = 'Light Mode'
    } else {
      bgClass = 'light-mode'
      buttonText = 'Dark Mode'
    }

    return (
      <div className="page-bg">
        <div className={`mode-container ${bgClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onButtonClick} className="btn">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
