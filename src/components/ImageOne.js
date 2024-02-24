import { Parallax } from "react-parallax";
import Beach from "../img/beachimageone.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Beach} strength={900}>
    <div className="content">
      <span className="img-txt">
        Lost in the rhythm of the waves, found in the beauty of the shore.
      </span>
    </div>
  </Parallax>
);

export default ImageOne;
