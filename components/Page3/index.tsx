import Image from 'next/dist/client/image';
import { Page1 } from './styled';

const PageThree = () => {
  return (
    <Page1>
    <div className="final">
    <div className="center">
        <div className="violet">
          <div className="alb2">
            <div className="container-page2">
              <div className="descriere-page2">
                <div className="title-page2">
                  <p id="titlu1-page3"> 1935 Civilian Conservation Corps</p>
                </div>
                <div className="caracterizare1-page2">
                  Stop school <br />
                  Norman Bourlaug has to stop school and save up more money.
                  Works in the Civilian Conservation Corps, helping starving
                  Americans. `I saw how food changed them`, he said. `All of
                  this left scars on me`
                </div>
              </div>
              <div className="imagine-univer">
                <Image
                  src="/poza4.png"
                  alt="Logo"
                  width={496.99}
                  height={227}
                />
              </div>
              <div className="an1">1935</div>
              <div className="an2">1937</div>
              <div className="imagine-familie">
                <Image
                  src="/poza5.png"
                  alt="Lucru in padure"
                  width={401}
                  height={242}
                />
              </div>
              <div className="descriere2-page2">
                <div className="title2-page2">
                  <p id="titlu2-page2">1937 US Forestry Service</p>
                </div>
                <div className="caracterizare2-page2">
                  Norman Bourlaug finishes university and takes a job <br /> in
                  the US Forestry Service
                </div>
                <a href="#titlu1-page4">
                  <Image
                    id="sageata-jos-pag2"
                    src="/jos.png"
                    alt="Jos"
                    width={40}
                    height={45}
                  />
                </a>
                <a href="#titlu1-page2">
                  <Image
                    id="sageata-sus"
                    src="/sus.png"
                    alt="Sus"
                    width={50}
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
  </Page1>
  
  
  );
};

export default PageThree;