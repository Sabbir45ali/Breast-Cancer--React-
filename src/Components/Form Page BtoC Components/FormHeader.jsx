const FormHeader = () => {
  const words = ["Early", "Detection", "Saves", "Lives"];

  return (
    <div className="fixed right-8 top-1/4 flex flex-col items-end space-y-8 text-8xl font-serif font-bold text-transparent drop-shadow-md">
      {words.map((word, index) => (
        <span key={index} className="formHeaderText">
          {word}
        </span>
      ))}
    </div>
  );
};

export default FormHeader;
