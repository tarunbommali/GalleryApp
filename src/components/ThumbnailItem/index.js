// TARUNBOMMALI.
import './index.css'

const ThumbnailItem = props => {
  const {eachList, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachList

  const activeButton = isActive ? 'active-button' : 'opacity-button'

  return (
    <li>
      <button
        type="button"
        className={activeButton}
        onClick={() => changeImage(id)}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="tumb-image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
