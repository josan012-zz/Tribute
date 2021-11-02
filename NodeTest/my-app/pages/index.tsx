import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
                  src="/Main image.png"
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
                    src="/down arrow.png"
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
                  src="/FOTO UNIVERSITY.png"
                  alt="Universitate"
                  width={543.65}
                  height={227}
                />
              </div>
              <div className="an1">1914</div>
              <div className="an2">1933</div>
              <div className="imagine-familie">
                <Image
                  src="/FOTO WITH THE FAMILY.png"
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
                    src="/down arrow.png"
                    alt="Jos"
                    width={40}
                    height={45}
                  />
                </a>
                <a href="#tribute">
                  <Image
                    id="sageata-sus"
                    src="/up arrow.png"
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
                  src="/foto natonal forest service.png"
                  alt="Logo"
                  width={496.99}
                  height={227}
                />
              </div>
              <div className="an1">1935</div>
              <div className="an2">1937</div>
              <div className="imagine-familie">
                <Image
                  src="/FOTO WORK IN THE FOREST.png"
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
                    src="/down arrow.png"
                    alt="Jos"
                    width={40}
                    height={45}
                  />
                </a>
                <a href="#titlu1-page2">
                  <Image
                    id="sageata-sus"
                    src="/up arrow.png"
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
      <div className="center">
        <div className="violet">
          <div className="alb2">
            <div className="container-page2">
              <div className="imagine-univer">
                <Image
                  src="/FOTO WITH WIFE.png"
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
                      src="/down arrow.png"
                      alt="Jos"
                      width={40}
                      height={45}
                    />
                  </a>
                  <a href="#titlu1-page3">
                    <Image
                      id="sageata-sus"
                      src="/up arrow.png"
                      alt="Sus"
                      width={50}
                      height={45}
                    />
                  </a>
                </div>
              </div>
              <div className="imagine-femei">
                <Image
                  src="/foto more women.png"
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
                  src="/poza.png"
                />
              </div>
              <div className="an1">1962</div>
              <div className="an2">2005</div>
              <div className="imagine-familie">
                <Image
                  src="/N.B.with the peoples.png"
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
                    src="/down arrow.png"
                    alt="Jos"
                    width={40}
                    height={45}
                  />
                </a>
                <a href="#titlu1-page4">
                  <Image
                    id="sageata-sus5"
                    src="/up arrow.png"
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
                src="/foto N.B. in the green plants.png"
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
                  src="/up arrow.png"
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

export default Home;
