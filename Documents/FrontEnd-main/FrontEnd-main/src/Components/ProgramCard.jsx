const ProgramCard = ({ program, onClick }) => (
    <div onClick={onClick} className="p-5 bg-white border rounded-xl hover:shadow-lg cursor-pointer transition-all">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{program.code}</h3>
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
          program.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {program.status}
        </span>
      </div>
      <p className="text-gray-600 font-medium">{program.name}</p>
      <div className="mt-4 flex gap-4 text-xs text-gray-400">
        <span>{program.duration}</span>
        <span>•</span>
        <span>{program.units} Total Units</span>
      </div>
    </div>
  );
  
  export default ProgramCard;