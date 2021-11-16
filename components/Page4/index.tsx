import Image from 'next/dist/client/image';
import { Page1 } from './styled';

const PageFour = () => {
  return (
    <div className="final">
    <div className="center">
        <div className="violet">
          <div className="alb2">
            <div className="container-page2">
              <div className="imagine-univer">
                <Image
                  src="/poza6.png"
                  alt="Logo"
                  width={401.96}
                  height={243}
                />
              </div>

              <div className="descriere-page3">
                <div className="title-page4">
                  <p id="titlu1-page4">
                    Norman Bourlaug in Mexico <br />
                    head a new plant pathology program
                  </p>
                </div>
                <div className="caracterizare1-page4">
                  1944 Norman Bourlaug rejects a 100% salary increase from
                  Dupont, leaves behind his pregnant wife, and flies to Mexico
                  to head a new plant pathology program.
                  <br /> Over the next 16 years, his team breeds 6,000 different
                  strains of disease resistent wheat - including different
                  varieties for each major climate on Earth.
                </div>
              </div>
              <div className="an1">1938</div>
              <div className="an3">1944</div>
              <div className="descriere2-page2">
                <div className="title2-page2">
                  <p id="titlu2-page2"> Norman Bourlaug marries</p>
                </div>
                <div className="caracterizare2-page2">
                  1938 Norman Bourlaug marries his 24-year-old wife, Margret
                  Gibson. It is made available due to budget cuts. Inspired by
                  Elvin Charles Stakman, he returns to school under Stakman, who
                  teaches him how to grow pest-resistant plants.
                </div>
                <div className="sageti">
                  <a href="#titlu1-page5">
                    <Image
                      id="sageata-jos-pag4"
                      src="/jos.png"
                      alt="Jos"
                      width={40}
                      height={45}
                    />
                  </a>
                  <a href="#titlu1-page3">
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
              <div className="imagine-femei">
                <Image
                  src="/poza7.png"
                  alt="Lucru in padure"
                  width={474}
                  height={239}
                />
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

export default PageFour;