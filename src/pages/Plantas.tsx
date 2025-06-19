import React, { useState, useEffect } from 'react';
import {
  PlantasContainer,
  BuscadorForm,
  BuscadorInput,
  BuscadorButton,
  PlantaFicha,
  ErrorMsg,
  SugeridasGrid
} from './plantas.styles.js';

// Lista de plantas sugeridas al inicio
const sugeridas = [
  "Rosa",
  "Cactus",
  "Lavanda",
  "Tulipán",
  "Helecho",
  "Orquídea"
];

// Palabras clave para filtrar si el artículo es planta
const palabrasClave = [
  'planta',
  'especie vegetal',
  'flor',
  'árbol',
  'arbusto',
  'hierba',
  'cactus',
  'suculenta',
  'familia botánica',
  'género botánico',
  'vegetal'
];

// Función para saber si el resultado parece planta
const esPlanta = (extract) =>
  palabrasClave.some(palabra => extract?.toLowerCase().includes(palabra));

const Plantas = () => {
  const [query, setQuery] = useState('');
  const [planta, setPlanta] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [sugeridasData, setSugeridasData] = useState([]);
  const [sugerencias, setSugerencias] = useState([]);
  const [showSugs, setShowSugs] = useState(false);

  // Cargar sugeridas una vez
  useEffect(() => {
    Promise.all(
      sugeridas.map(async (nombre) => {
        const res = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nombre)}`);
        const data = await res.json();
        return data;
      })
    ).then(setSugeridasData);
  }, []);

  // Fetch de sugerencias en vivo mientras el usuario escribe
  const obtenerSugerencias = async (texto) => {
    if (texto.length < 2) {
      setSugerencias([]);
      setShowSugs(false);
      return;
    }
    const res = await fetch(`https://es.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(texto)}&limit=5&namespace=0&format=json&origin=*`);
    const data = await res.json();
    setSugerencias(data[1]);
    setShowSugs(true);
  };

  // Al escribir en el input
  const onInputChange = (e) => {
    setQuery(e.target.value);
    obtenerSugerencias(e.target.value);
  };

  // Cuando el usuario selecciona una sugerencia
  const clickSugerencia = (nombre) => {
    setQuery(nombre);
    setShowSugs(false);
    buscarPlantaNombre(nombre);
  };

  // Buscar planta por nombre (Wikipedia Summary API)
  const buscarPlantaNombre = async (nombre) => {
    setCargando(true);
    setError('');
    setPlanta(null);

    try {
      const res = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nombre)}`);
      if (!res.ok) {
        setError('No encontrada 😢');
        setCargando(false);
        return;
      }
      const data = await res.json();
      if (data.type === 'disambiguation' || data.type === 'https') {
        setError('Demasiadas coincidencias, sé más específico.');
        setCargando(false);
        return;
      }
      setPlanta(data);
    } catch {
      setError('Error buscando la planta');
    }
    setCargando(false);
  };

  // Al enviar el formulario (presionar enter o buscar)
  const buscarPlanta = (e) => {
    e.preventDefault();
    if (!query) return;
    setShowSugs(false);
    buscarPlantaNombre(query);
  };

  return (
    <PlantasContainer>
      <h2>Buscador de Plantas 🌱</h2>
      <BuscadorForm onSubmit={buscarPlanta}>
        <BuscadorInput
          type="text"
          placeholder="Escribe el nombre de una planta"
          value={query}
          onChange={onInputChange}
          onFocus={() => { if (sugerencias.length > 0) setShowSugs(true); }}
          autoComplete="off"
        />
        <BuscadorButton type="submit">Buscar</BuscadorButton>
        {showSugs && sugerencias.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: '#232336',
            color: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 2px 10px #0007',
            width: '100%',
            marginTop: 2,
            zIndex: 10
          }}>
            {sugerencias.map((nombre, i) => (
              <div
                key={i}
                onClick={() => clickSugerencia(nombre)}
                style={{
                  padding: '0.7rem 1rem',
                  cursor: 'pointer',
                  borderBottom: i === sugerencias.length - 1 ? 'none' : '1px solid #333'
                }}
              >
                {nombre}
              </div>
            ))}
          </div>
        )}
      </BuscadorForm>

      {cargando && <div>Buscando...</div>}
      {error && <ErrorMsg>{error}</ErrorMsg>}

      {/* Render de resultado de búsqueda con filtro */}
      {planta && (
        esPlanta(planta.extract)
          ? (
            <PlantaFicha>
              <h3>{planta.title}</h3>
              {planta.thumbnail?.source && (
                <img src={planta.thumbnail.source} alt={planta.title} style={{ width: 180 }} />
              )}
              <p>{planta.extract}</p>
              <a href={planta.content_urls?.desktop?.page} target="_blank" rel="noopener noreferrer">
                Ver en Wikipedia
              </a>
            </PlantaFicha>
          )
          : (
            <ErrorMsg>
              <b>No parece ser una planta (o Wikipedia no lo especifica).</b>
              <br />
              Intenta ser más específico o revisa el artículo:
              <br />
              <a href={planta.content_urls?.desktop?.page} target="_blank" rel="noopener noreferrer" style={{ color: '#5dd39e' }}>
                {planta.title} en Wikipedia
              </a>
            </ErrorMsg>
          )
      )}

      {/* Sugeridas si no hay búsqueda */}
      {!query && sugeridasData.length > 0 && (
        <SugeridasGrid>
          {sugeridasData.map((planta) => (
            <PlantaFicha key={planta.title}>
              <h3>{planta.title}</h3>
              {planta.thumbnail?.source && (
                <img src={planta.thumbnail.source} alt={planta.title} style={{ width: 120 }} />
              )}
              <p style={{ fontSize: '0.9rem' }}>{planta.extract?.slice(0, 100) || "Sin descripción"}</p>
              <a href={planta.content_urls?.desktop?.page} target="_blank" rel="noopener noreferrer">
                Ver en Wikipedia
              </a>
            </PlantaFicha>
          ))}
        </SugeridasGrid>
      )}
    </PlantasContainer>
  );
};

export default Plantas;
