import { Parallax } from "react-parallax";
import BeachTwo from "../img/beachimagetwo.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={BeachTwo} strength={800}>
    <div className="content">
      <span className="img-txt">
        Where every sunset paints a new masterpiece across the sky, and every
        sunrise whispers promises of a fresh start.
      </span>
    </div>
  </Parallax>
);

export default ImageTwo;
