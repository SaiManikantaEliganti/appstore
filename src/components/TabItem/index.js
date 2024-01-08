import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabItemClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={activeTabItemClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
