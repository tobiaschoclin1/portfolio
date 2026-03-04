export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto p-8 mt-8 bg-white shadow-lg rounded-xl border border-gray-100">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Experiencia Profesional</h3>
      
      <div className="mb-6 border-l-4 border-blue-500 pl-4">
        <h4 className="text-xl font-bold text-gray-800">Pasante IT Support Engineering <span className="text-blue-600">@ Red Hat</span></h4>
        <p className="text-sm text-gray-500 mb-2">Feb 2025 - Presente</p>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>Soporte presencial y remoto para asociados (Windows, macOS y Linux).</li>
          <li>Gestión y resolución de tickets en ServiceNow.</li>
          <li>Soporte para aplicaciones corporativas (MS Office, Google Workspace).</li>
        </ul>
      </div>

      <div className="border-l-4 border-gray-300 pl-4">
        <h4 className="text-xl font-bold text-gray-800">Pasante de Administración de Aplicaciones <span className="text-blue-600">@ Claro</span></h4>
        <p className="text-sm text-gray-500 mb-2">Jun 2024 - Ene 2025</p>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>Implementación de jobs y procesos en Control-M.</li>
          <li>Administración e implementación de ETL con Apache NiFi.</li>
          <li>Mantenimiento en ecosistema Linux/Unix-Oracle 10 y 11.</li>
        </ul>
      </div>
    </section>
  );
}