import maincontentCSS from "/maincomponents/maincontent.css";

export default function maincontent() {
  return (
    <div
      className="container-fluid m-0 p-5 main-content mx-auto"
      style={maincontentCSS}
    >
      {/* <div className="title-mc h2 text-center mx-auto p-4">titlu</div> */}
      <div className="desc-mc text-center mx-auto p-4">
        Încurajăm implicarea tuturor în activitățile didactice și putem oferi
        elevilor, dar și profesorilor materiale de calitate și cu informații
        corecte, sau doar un loc în care întrebările își vor găsi mereu răspuns.
      </div>
    </div>
  );
}
