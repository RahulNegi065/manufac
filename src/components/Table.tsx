interface TableProps {
  title: string;
  data: any[];
}

const Table: React.FC<TableProps> = ({ title, data }) => {
  return (
    <>
      <h4>{title}</h4>
      <div className="table">
        <div className="row">
          <div className="cell bold">Measure</div>
          <div className="cell bold">
            {title === "Table 1" ? "Flavanoids" : "Gamma"} <br /> Mean
          </div>
          <div className="cell bold">
            {title === "Table 1" ? "Flavanoids" : "Gamma"} <br /> Median
          </div>
          <div className="cell bold">
            {title === "Table 1" ? "Flavanoids" : "Gamma"} <br /> Mode
          </div>
        </div>
        {data.length &&
          data.map((item: any) => (
            <div key={item.alcohol} className="row">
              <div className="cell bold">Class {item.alcohol}</div>
              <div className="cell">{item.mean}</div>
              <div className="cell">{item.median}</div>
              <div className="cell">{ item.mode }</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Table;
