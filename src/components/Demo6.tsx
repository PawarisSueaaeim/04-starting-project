import React from "react";

type Props = {};

export default function Demo6({}: Props) {
  const result = [
    { name: "Pleum", age: "20", gender: "male" },
    { name: "Mauris", age: "22", gender: "female" },
  ];
  return (
    <div>
      <ul>
        {result.map((item,index) => {
          return <li data-testid="li" key={index}>{item.name} {item.age} {item.gender}</li>;
        })}
      </ul>
    </div>
  );
}
