import Image from 'next/dist/client/image';
import { Page1 } from './styled';

const PageOne = () => {
  return (
    <div className="final">
    <div className="center">
    <div className="violet">
      <div className="alb">
        <div className="nav">
          <div className="logo">
            <p id="tribute">tribute</p>
          </div>
          <div className="link-about">
            <a id="about" href="">
              About
            </a>
          </div>
          <div className="link-info">
            <a id="info" href="">
              Info
            </a>
          </div>
        </div>
        <div className="grid-container-page1">
          <div className="imagine-page1">
            <Image
              src="/poza1.png"
              alt="Echipa"
              width={522.57}
              height={347}
            />
          </div>
          <div className="descriere-page1">
            <div className="nume">
              <p id="doctor">Dr. Norman Borlaug</p>
            </div>
            <div className="titlu">
              <p id="title">
                The man who <br />
                saved a billion lives
              </p>
            </div>
            <div className="perioada">
              <p id="ani">1914 - 2009</p>
            </div>
          </div>
          <div className="caracterizare">
            <p id="carac">
              Dr. Norman Borlaug, third from the left, trains biologists in
              Mexico on how to increase wheat yields - part of his life-long
              war on hunger.
            </p>
          </div>
          <div className="sag-jos">
            <a href="#titlu1-page2">
              <Image
                id="sageata"
                src="/jos.png"
                alt="Jos"
                width={30}
                height={45}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="center">
    <div className="trecere-pagina"></div>
  </div>
  </div>
  
  
  
  );
};

export default PageOne;