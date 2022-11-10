// @ts-ignore
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import mockData from "../../mockData.json";

const BubbleChart = () => {
  const data: any = mockData;

  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  return (
    <>
      {" "}
      <BubbleUI options={options} className="myBubbleUI">
        {data.map((item: any, i: number) => {
          if (i === item.length / 2) {
            return (
              <span className="child" key={i}>
                Hello
              </span>
            );
          } else {
            return <Child className="child" key={i} />;
          }
        })}
      </BubbleUI>
    </>
  );
};

export default BubbleChart;
