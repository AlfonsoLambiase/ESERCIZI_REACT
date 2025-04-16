const Colors = ({ colors }) => {
  return (
    <div>
   
        {colors.map((color) => (
            <ul key={colors.id}>
            <li>{color.name}</li>
            <li>{color.id}</li>
            </ul>
        ))}
      
      </div>
  );
};

export default Colors;
