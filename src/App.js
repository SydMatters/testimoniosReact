import './App.css';
import {Testimonio} from './componentes/testimonio';
import {HeroButton} from './componentes/HeroButton';
function App() {
  return (
    <div className="App">
      <h1>Here is what my favorite characters have to said about their career:</h1>
      <div className='button-container'>
        <HeroButton 
          name='Peter Parker' 
        />
        <HeroButton 
          name='Gustavo Cerati'
        />
        <HeroButton 
          name='Sherk'
        />
      </div>
      <div className='contenedor-principal'>
        <Testimonio
          name = 'Peter Parker'
          country = 'New York'
          img = 'spiderman'
          job = 'Fotógrafo'
          company = 'Daily Bugle'
          testimony = 'Siempre he tenido dificultades con la fotografía urbana. He probado muchos cursos, pero el curso de Daily Bugle fue el que realmente me enganchó. Aprender técnicas de fotografía de calle y composición en Daily Bugle me dio las habilidades y la confianza que necesitaba para capturar las mejores imágenes de la ciudad y hacer avanzar mi carrera como fotógrafo en Daily Bugle'
        />
        <Testimonio
          name = 'Gustavo Cerati'
          country = 'Argentina'
          img = 'cerati'
          job = 'Músico'
          company = 'Soda Stereo'
          testimony = 'Soda Stereo fue la puerta de entrada a mi carrera como músico. La estructura y profundidad de nuestro trabajo llevaron mi creatividad de un nivel básico a uno muy profundo. Fue todo lo que necesitaba para lanzar mi primera producción musical con la banda'
        />
        <Testimonio
          name = 'Sherk'
          country = 'el pantano'
          img = 'sherk'
          job = 'Ogro retirado y protector del hogar'
          company = 'Swamp'
          testimony = 'Cambiar de vida puede ser aterrador. Solo gané confianza en mis habilidades de ser un guardián del pantano a través de horas de lecciones gratuitas en SwampCodeCamp. En menos de un año, conseguí un trabajo estable como guardián del pantano. SwampCodeCamp cambió mi vida'
        />
      </div>
    </div>
  );
}

export default App;


