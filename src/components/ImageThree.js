import { Parallax } from "react-parallax";
import BeachThree from "../img/beachimagethree.jpg"

const ImageThree = () => (
  <Parallax className="image" bgImage={BeachThree} strength={800}>
    <div className="content">
      <span className="img-txt">
        Lost in the rhythm of the waves, found in the beauty of the shore.
      </span>
    </div>
  </Parallax>
);

export default ImageThree;
