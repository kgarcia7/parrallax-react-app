import { Parallax } from "react-parallax";
import BeachTwo from "../img/beachimagetwo.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={BeachTwo} strength={800}>
    <div className="content">
      <span className="img-txt">
        Lost in the rhythm of the waves, found in the beauty of the shore.
      </span>
    </div>
  </Parallax>
);

export default ImageTwo;
