import React from "react";
import { RootProps } from "@/exposed-types";

const Root = ({ name }: RootProps) => (
    <div className="container">
        <div>Name: { name }</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>
    </div>
);

export default Root;
