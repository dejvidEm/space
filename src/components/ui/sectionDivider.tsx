interface DividerProps {
    length?: number;
  }
  
  const Divider: React.FC<DividerProps> = ({ length = 16 }) => {
    return (
      <div
        className="w-1 rounded-lg bg-gray-100 mx-auto"
        style={{ height: `${length}px` }}
      ></div>
    );
  };
  
  export default Divider;