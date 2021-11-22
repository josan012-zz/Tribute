import Image from 'next/dist/client/image';
import { Page1 } from './styled';

const PageTwo = () => {
  return (
    <Page1>
    <div className="final">
    <div className="center">
        <div className="violet">
          <div className="alb2">
            <div className="container-page2">
              <div className="descriere-page2">
                <div className="title-page2">
                  <p id="titlu1-page2"> March 25, 1914 Born in Cresco, Iowa</p>
                </div>
                <div className="caracterizare1-page2">
                  Norman Borlaug was born to Henry Oliver <br />
                  (1889–1971) and Clara (Vaala) Borlaug <br />
                  (1888–1972) on his grandparents farm in Saude in 1914, the
                  first of four children. His three sisters were Palma Lillian
                  (Behrens; 1916–2004), Charlotte (Culbert; b. 1919) and Helen
                  (b. 1921).
                </div>
              </div>
              <div className="imagine-univer">
                <Image
                  src="/poza2.png"
                  alt="Universitate"
                  width={543.65}
                  height={227}
                />
              </div>
              <div className="an1">1914</div>
              <div className="an2">1933</div>
              <div className="imagine-familie">
                <Image
                  src="/poza3.png"
                  alt="Familie"
                  width={399}
                  height={243}
                />
              </div>
              <div className="descriere2-page2">
                <div className="title2-page2">
                  <p id="titlu2-page2">
                    1933 - Norman Bourlaug Admission to the Minnesota University
                  </p>
                </div>
                <div className="caracterizare2-page2">
                  1933 - Norman Bourlaug leaves his familys farm to attend the
                  University of Minnesota, thanks to a Depression era program
                  known as the `National Youth Administration`
                </div>
                <a href="#titlu1-page3">
                  <Image
                    id="sageata-jos-pag2"
                    src="/jos.png"
                    alt="Jos"
                    width={40}
                    height={45}
                  />
                </a>
                <a href="#tribute">
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

export default PageTwo;