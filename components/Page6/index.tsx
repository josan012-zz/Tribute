import Image from 'next/dist/client/image';
import { Page1 } from './styled';

const PageSix = () => {
  return (
    <div className="final">
  <div className="center">
        <div className="violet">
          <div className="alb2">
            <div className="center">
              <div className="titlu-final">
                <p id="final">Norman Bourlaug dies</p>
              </div>
            </div>
            <div className="center">
              <p id="moarte">2009 Norman Bourlaug dies at the age of 95.</p>
            </div>
            <div className="center">
              <p id="ultimul-an">2009</p>
            </div>
            <div className="center">
              <Image
                id="ultima"
                src="/poza10.png"
                alt="Moarte"
                width={446}
                height={245}
              />
            </div>
            <div className="center">
              <div className="wiki">More info on the wikipedia</div>
            </div>
            <div className="center">
              <a href="#titlu1-page5">
                <Image
                  id="sageata-final"
                  src="/sus.png"
                  alt="Sus"
                  width={50}
                  height={75}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  
  
  );
};

export default PageSix;