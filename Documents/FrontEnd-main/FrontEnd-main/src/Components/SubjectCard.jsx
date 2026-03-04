const SubjectCard = ({ subject, onClick }) => (
    <div onClick={onClick} className="flex flex-col p-4 bg-white border rounded-lg hover:border-blue-400 cursor-pointer shadow-sm transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-blue-500">{subject.code}</span>
        <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-500 uppercase font-bold">
          {subject.term}
        </span>
      </div>
      <h4 className="font-bold text-gray-800 line-clamp-1">{subject.title}</h4>
      <p className="text-xs text-gray-500 mt-1">{subject.program} • {subject.units} Units</p>
    </div>
  );
  
  export default SubjectCard;