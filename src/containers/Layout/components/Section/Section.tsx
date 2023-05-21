import * as React from "react";
import * as Style from "./styles";

interface Props {
  //   children?: React.ReactNode;
  page: React.ReactNode;
  // any props that come into the component
}

const Section = ({ page }: Props) => {
  return <Style.main>{page}</Style.main>;
};

export default Section;
