const ProgramDetails = ({ program, onClose }) => {
    if (!program) return null;
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl overflow-hidden relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl">&times;</button>
          <h2 className="text-3xl font-bold mb-2">{program.name}</h2>
          <p className="text-blue-600 font-bold mb-4">{program.code}</p>
          <p className="text-gray-600 leading-relaxed">{program.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 text-sm">
            <div><span className="font-bold">Type:</span> {program.type}</div>
            <div><span className="font-bold">Duration:</span> {program.duration}</div>
            <div><span className="font-bold">Units:</span> {program.units}</div>
            <div><span className="font-bold">Status:</span> {program.status}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgramDetails;