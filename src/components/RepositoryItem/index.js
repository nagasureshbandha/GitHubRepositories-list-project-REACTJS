import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props

  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img src={imageUrl} alt={name} className="respository-image" />
      <h1 className="repository-name">{name}</h1>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="stars-icon"
          alt="stars"
        />
        <p className="starts-text">{starsCount} stars</p>
      </div>

      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="stars-icon"
          alt="forks"
        />
        <p className="starts-text">{forksCount} forks</p>
      </div>

      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="stars-icon"
          alt="open issues"
        />
        <p className="starts-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
