import { Parallax } from "react-parallax";
import BeachThree from "../img/beachimagethree.jpg"

const ImageThree = () => (
  <Parallax className="image" bgImage={BeachThree} strength={800}>
    <div className="content">
      <span className="img-txt">
        Embrace the tranquil symphony of crashing waves and gentle breezes,
        where time pauses to let you savor the moment.
      </span>
    </div>
  </Parallax>
);

export default ImageThree;
