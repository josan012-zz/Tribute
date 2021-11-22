import Image from 'next/dist/client/image';
import { Page1 } from './styled';

const PageFive = () => {
  return (
    <Page1>
    <div className="final">
     <div className="center">
        <div className="violet">
          <div className="alb2">
            <div className="container-page2">
              <div className="descriere-page2">
                <div className="title-page2">
                  <p id="titlu1-page5"> Norman Bourlaug visits Delhi</p>
                </div>
                <div className="caracterizare1-page2">
                  1962 Norman Bourlaug Visits Delhi and brings his high-yielding
                  strains of wheat to the Indian subcontinent in time to help
                  mitigate mass starvation due to a rapidly expanding population
                </div>
              </div>
              <div className="imagine-univer">
                <Image
                  alt="Vorbeste"
                  width={533}
                  height={222}
                  src="/poza8.png"
                />
              </div>
              <div className="an1">1962</div>
              <div className="an2">2005</div>
              <div className="imagine-familie">
                <Image
                  src="/poza9.png"
                  alt="Familie"
                  width={399}
                  height={243}
                />
              </div>
              <div className="descriere2-page2">
                <div className="title2-page2">
                  <p id="titlu2-page2">Norman Borlaug`s 2005 speech</p>
                </div>
                <div className="caracterizare2-page2">
                  In his 2005 speech, Norman Bourlaug stated that ``we will have
                  to double the world`s food supply by 2050.`` He argues that
                  genetically modified crops are the only way we can meet demand
                  because we run out of arable land. He says genetically
                  modified crops are not inherently dangerous because ``we`ve
                  been genetically modifying plants and animals for a long time.
                  Long before we called it science, humans chose the best
                  breeds.``
                </div>
                <a href="#final">
                  <Image
                    id="sageata-jos5"
                    src="/jos.png"
                    alt="Jos"
                    width={40}
                    height={45}
                  />
                </a>
                <a href="#titlu1-page4">
                  <Image
                    id="sageata-sus5"
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

export default PageFive;