import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabList, isActive, changeTabId} = this.props
    const {tabId, displayText} = tabList

    const onclickDisplay = isActive ? 'btn-el' : ''

    const onClickChangeTabId = () => {
      changeTabId(tabId)
    }

    return (
      <li key={tabId}>
        <button
          type="button"
          className={onclickDisplay}
          onClick={onClickChangeTabId}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
