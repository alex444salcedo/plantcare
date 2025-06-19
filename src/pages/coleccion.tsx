import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Header,
  PlantList,
  PlantCard,
  AddPlantForm,
  Overlay,
  StyledButton,
} from "./coleccion.styles";

const ubicaciones = [
  "Sala",
  "Cocina",
  "Dormitorio",
  "Balcón",
  "Baño",
  "Exterior",
];

export default function Coleccion() {
  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    fecha: "",
    tipo: "",
    foto: null,
  });
  const [editingPlantaId, setEditingPlantaId] = useState(null); // Para manejar la edición

  // Cargar las plantas del usuario
  useEffect(() => {
    const token = localStorage.getItem("token");  // Obtener el token desde localStorage
    const usuario_id = 1;  // Asegúrate de que este valor sea el ID de tu usuario

    if (token && usuario_id) {
      console.log("Obteniendo plantas para el usuario:", usuario_id);
      axios
        .get(`http://localhost:5000/api/plants/user/${usuario_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,  // Enviar el token en los encabezados
          },
        })
        .then((res) => {
          console.log('Plantas obtenidas:', res.data);
          setPlants(res.data);
        })
        .catch((err) => {
          console.log("Error al obtener plantas:", err);
        });
    }
  }, []);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setForm((prev) => ({
        ...prev,
        foto: files[0], // Guardamos el archivo de la foto
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Enviar el formulario de planta (Agregar o Editar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const usuario_id = 1;  // Asegúrate de tomar el ID del usuario autenticado

    if (!token || !usuario_id) return;

    const formData = new FormData();
    formData.append("nombre", form.nombre);
    formData.append("ubicacion", form.ubicacion);
    formData.append("fecha_adquisicion", form.fecha);
    formData.append("tipo", form.tipo);
    formData.append("foto", form.foto);
    formData.append("usuario_id", usuario_id);

    try {
      console.log("Enviando datos para agregar o editar la planta:", formData);
      if (editingPlantaId) {
        // Si estamos editando una planta
        await axios.put(`http://localhost:5000/api/plants/update/${editingPlantaId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // Si estamos agregando una nueva planta
        await axios.post("http://localhost:5000/api/plants/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      }

      // Recargar las plantas después de agregar o editar una
      const response = await axios.get(`http://localhost:5000/api/plants/user/${usuario_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlants(response.data);
      setShowForm(false);
      setForm({
        nombre: "",
        ubicacion: "",
        fecha: "",
        tipo: "",
        foto: null,
      });
      setEditingPlantaId(null);  // Limpiar el ID de la planta que estamos editando
    } catch (err) {
      console.log("Error al agregar o editar la planta:", err);
    }
  };

  // Eliminar una planta
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const usuario_id = 1; // Asegúrate de tomar el ID del usuario autenticado

    if (!token || !usuario_id) return;

    try {
      console.log(`Eliminando planta con ID: ${id}`);
      await axios.delete(`http://localhost:5000/api/plants/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Recargar las plantas después de eliminar
      const response = await axios.get(`http://localhost:5000/api/plants/user/${usuario_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlants(response.data);
    } catch (err) {
      console.log("Error al eliminar la planta:", err);
    }
  };

  // Editar una planta
  const handleEdit = (planta) => {
    console.log('Editando planta:', planta);
    setForm({
      nombre: planta.nombre,
      ubicacion: planta.ubicacion,
      fecha: planta.fecha_adquisicion,
      tipo: planta.tipo,
      foto: null,
    });
    setEditingPlantaId(planta.id);  // Almacena el ID de la planta que estamos editando
    setShowForm(true);
  };

  return (
    <Container>
      <Header>
        <StyledButton onClick={() => window.history.back()}>Regresar</StyledButton>
        <div>Total de plantas: {plants.length}</div>
        <StyledButton onClick={() => setShowForm(true)}>Agregar Planta</StyledButton>
      </Header>

      <PlantList>
        {plants.map((planta, i) => (
          <PlantCard key={i}>
            <div style={{ fontWeight: "bold" }}>{planta.nombre}</div>
            {planta.ubicacion && <div>Ubicación: {planta.ubicacion}</div>}
            {planta.fecha && <div>Fecha: {planta.fecha_adquisicion}</div>}
            {planta.tipo && <div>Tipo: {planta.tipo}</div>}
            {planta.foto && (
              <img
                src={planta.foto}
                alt="planta"
                style={{ width: 60, height: 60, borderRadius: 8, marginTop: 8 }}
              />
            )}
            <StyledButton onClick={() => handleEdit(planta)}>Editar</StyledButton>
            <StyledButton onClick={() => handleDelete(planta.id)}>Eliminar</StyledButton>
          </PlantCard>
        ))}
      </PlantList>

      {showForm && (
        <Overlay>
          <AddPlantForm onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <StyledButton type="button" onClick={() => setShowForm(false)}>
                Regresar
              </StyledButton>
              <div style={{ flex: 1 }} />
              <StyledButton disabled>Agrega una Nueva Planta</StyledButton>
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Nombre de la planta:</label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Ubicación en casa:</label>
              <select
                name="ubicacion"
                value={form.ubicacion}
                onChange={handleChange}
              >
                <option value="">Selecciona...</option>
                {ubicaciones.map((u, i) => (
                  <option key={i} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Fecha de adquisición:</label>
              <input
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Tipo de planta:</label>
              <input name="tipo" value={form.tipo} onChange={handleChange} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Foto:</label>
              <input
                type="file"
                name="foto"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <StyledButton type="submit">Agrega tu nueva planta</StyledButton>
          </AddPlantForm>
        </Overlay>
      )}
    </Container>
  );
}
