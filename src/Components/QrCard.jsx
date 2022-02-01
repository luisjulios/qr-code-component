import QR from '../images/image-qr-code.png';
const QrCard = () => {
  return <div className='card'>
          <div className='card_img'>
            <img src={QR} alt="QR code" className='img-qr'/>
          </div>
          <div className='card-texts'>
            <p className='first-text'>
              Improve your front-end skills by building projects.
            </p>
            <p className='second-text'>
              Scan the QR code to visit Frontend Mentor and take your coding skils to the next level.
            </p>
          </div>
        </div>;
  };

export default QrCard;
