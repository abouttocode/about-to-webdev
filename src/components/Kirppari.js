import './Kirppari.css';


function Kirppari() {
  return (
    <div className="Kirppari">
      <header className="Kirppari-header">
        <div className="main">
        <h1> Second Hand & Cafe Ilona </h1>
        </div>
        <div className="main">
        <h2>
          Aikataulukko
        </h2>
        </div>
        <div className="main">
        <button>Maaliskuu 2021</button><button>Huhtikuu 2021</button><button>Toukokuu 2021</button>

        <p> **Tähän joku kalenteri varaus homma** </p>
      </div>
      </header>
      
      <div className="sidenav">
      <a href="reserve">Varaa paikka</a>
      <a href="reservations">Varaukset</a>
      <a href="price">Hinnoittele</a>
      <a href="sales">Myynnin seuranta</a>
      <a href="personal">Omat tiedot</a>
      <p/>
      <a href="announce">Tiedoitteet</a>
      <a href="tutorial">Ohjeet</a>
      <p/>
      <b> Kirjaudu Ulos </b>
      <p/>
      <p/>
      <a href="serviceinfo">Tietoa palveluista</a>
      </div>
    </div>
  );
}




export default Kirppari;
