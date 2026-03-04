const SubjectDetails = ({ subject, onClose }) => {
    if (!subject) return null;
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400">&times;</button>
          <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{subject.code}</span>
          <h2 className="text-2xl font-bold mb-4">{subject.title}</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Description</p>
              <p className="text-gray-700">{subject.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Pre-requisites</p>
                <p className={subject.prereq === 'none' ? 'text-gray-400' : 'text-red-500 font-bold'}>{subject.prereq}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Co-requisites</p>
                <p className="text-gray-700">{subject.coreq}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="w-full mt-8 bg-blue-600 text-white font-bold py-3 rounded-lg">Done</button>
        </div>
      </div>
    );
  };
  
  export default SubjectDetails;
  