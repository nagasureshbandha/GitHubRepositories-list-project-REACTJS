// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, selectActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails

  const btnClassName = isActive ? 'language-btn active' : 'language-btn'

  const onClickBtnLanguageFilter = () => {
    selectActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickBtnLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
