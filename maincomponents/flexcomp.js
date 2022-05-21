import flexcompCSS from "/maincomponents/flexcomp.css";

export default function flexcomp() {
  return (
    <div
      className="container-fluid container-of-flex-items m-0 p-0"
      style={flexcompCSS}
    >
      <div className="flex-items-offer d-flex pt-5 pb-5">
        <div
          className="offer-item-1 p-5 m-3 mt-0  mx-auto"
          // onClick={() => {
          //   //aici trb sa adaugi tu sa se intample numai daca nu e pers conectata
          //   let notif1 = document.querySelector(".notification");
          //   notif1.style.display = "block";
          //   setTimeout(() => {
          //     notif1.style.display = "none";
          //   }, 2000);
          // }}
        >
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/pomodoro-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">METODA POMODORO</h5>
          <p className="text-center">
            A fi distras și a procrastina sunt două din cele mai comune
            obstacole pe care elevii le întâlnesc. Foarte mulți afirmă că le-ar
            plăcea să se poată concentra mai bine. În căutarea unei chei către
            productivitate, noi am găsit metoda Pomodoro.
          </p>
        </div>
        <div
          className="offer-item-2 p-5 m-3 mt-0  mx-auto"
          // onClick={() => {
          //   //aici trb sa adaugi tu sa se intample numai daca nu e pers conectata
          //   let notif2 = document.querySelector(".notification");
          //   notif2.style.display = "block";
          //   setTimeout(() => {
          //     notif2.style.display = "none";
          //   }, 2000);
          // }}
        >
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/calculator-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">CALCULATOR MEDIE</h5>
          <p className="text-center">
            Mulți școlari întâmpină probleme în calcularea mediei
            semestrială/anuală a materiilor. Fie că este vorba de o materie cu
            teză, fie că nu, platforma noastră vă oferă un calculator rapid de
            utilizat.
            <br /> Media cu teza se calculează după formula{" "}
            <span className="pink">MF = (3M + T)/4</span>.
          </p>
        </div>
        <div
          className="offer-item-3 p-5 m-3 mt-0 mx-auto"
          onClick={() => {
            //aici trb sa adaugi tu sa se intample numai daca nu e pers conectata
            let notif3 = document.querySelector(".notification");
            notif3.style.display = "block";
            setTimeout(() => {
              notif3.style.display = "none";
            }, 2000);
          }}
        >
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/resources-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">RESURSE</h5>
          <p className="text-center">
            Resursele noastre reprezintă un plus materiei predate în programa de
            la școală. Materialele de pe site sunt structurate pentru a-i ajuta
            pe elevi să învețe cu ușurință, iar singurul lucru pe care îl
            necesită este înregistrarea/conectarea.
          </p>
        </div>
      </div>{" "}
      <div className="lowsvg">
        <div class="custom-shape-divider-top-1652934091">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
