import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onclickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
