import "./index.css"

const LeftFrame = () => {
    return (
        <div className="left-container">
          <div className="scrollable-boxes">
            {Array.from({ length: 30 }).map((_, index) => (
              <div className="box" key={index}>

              </div>
            ))}
          </div>
        </div>
    )
}

export default LeftFrame