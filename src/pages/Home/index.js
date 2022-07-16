import "./netflix.css";
import logo from "../../assets/images/logo.png";
import Motivo1 from "../../assets/images/motivo-1.png";
import Motivo2 from "../../assets/images/motivo-2.png";

// react components
import Button from "../../components/Button";
import Divisor from "../../components/Divisor";
import Motivo from "../../components/Motivo";
import Card from "../../components/Card";

// constants
import MOTIVOS from "../../constants/motivos";

//function App() {...}

function Home() {

  function saudar () {
    return alert("Olá, mundo!");
  }
  


  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <Button variante="alert" text={"Login"}  />

          {/* <button>Entrar</button> */}
        </div>
      </header>

      <section id="banner">
        <h1 >
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <Card>
          
        </Card>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <p>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div>
          <input type="email" placeholder="Email" />
          <Button variante="success" text={"Vamos Lá"} />

        </div>
      </section>

      <Divisor />

      <Motivo
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        image={Motivo1}
        altImage="Imagem 1"
        classStyle="motivos"

      />

      <Divisor />

      <Motivo
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        image={Motivo2}
        altImage="Imagem 2"
        classStyle="motivos alterna"
      />


      <Divisor />

      <Motivo
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        image={Motivo1}
        altImage="Imagem 1"
        classStyle="motivos"

      />

      <Divisor />

      <Motivo
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        image={Motivo2}
        altImage="Imagem 2"
        classStyle="motivos alterna"
      />
      <Divisor />

    </div>

  )
}



export default Home;
