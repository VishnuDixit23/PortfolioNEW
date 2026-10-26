const Alert = ({ type, text }) => {
  return (
    <div className="fixed bottom-6 right-6 flex justify-center items-center z-50 animate-fade-in">
      <div
        className="px-4 py-3 bg-[#111113] border border-white/15 text-white rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-xl"
        role="alert"
      >
        <span
          className={`rounded-md uppercase px-2 py-0.5 text-[10px] font-bold tracking-wider ${
            type === 'danger'
              ? 'bg-red-500/15 text-red-400 border border-red-500/25'
              : 'bg-white/10 text-white border border-white/20'
          }`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </span>
        <p className="text-sm font-medium text-neutral-200">{text}</p>
      </div>
    </div>
  );
};

export default Alert;