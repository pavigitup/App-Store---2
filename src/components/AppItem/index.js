import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appList} = this.props
    const {appId, imageUrl, appName} = appList
    return (
      <li key={appId} className="img-con">
        <img src={imageUrl} alt={appName} className="img" />
        <p className="para-img">{appName}</p>
      </li>
    )
  }
}

export default AppItem
