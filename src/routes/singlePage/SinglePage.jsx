import Map from '../../components/map/Map'
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../lib/dummy-data'
import './singlePage.scss'


const SinglePage = () => {
  return (
    <div className='singlePage'>

      <div className="details">
        <div className="wrapper">

          <Slider images={singlePostData.images} />

          <div className="info">

            <div className="top">

              <div className="post">

                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="address" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ${singlePostData.price}
                </div>

              </div>

              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>

            </div>


            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>

        </div>
      </div>

      <div className="features">
        <div className="wrapper">

          <p className="title">General</p>
          <div className="listVerticle">

            <div className="feature">
              <img src="./utility.png" alt="feature" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="./pet.png" alt="feature" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src="./fee.png" alt="feature" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the total household income</p>
              </div>
            </div>

          </div>


          <p className="title">Room Sizes</p>
          <div className="sizes">

            <div className="size">
              <img src="/size.png" alt="size" />
              <span>80 sqft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="size" />
              <span>2 Bed</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="size" />
              <span>1 Bathroom</span>
            </div>

          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>


          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">

            <button>
              <img src="./chat.png" alt="" />
              Send a Message
            </button>

            <button>
              <img src="./save.png" alt="" />
              Save the Place
            </button>

          </div>


        </div>
      </div>

    </div>
  )
}

export default SinglePage