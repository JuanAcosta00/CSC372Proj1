import React, { useState, useEffect } from 'react'
import { CopyBlock, nord} from "react-code-blocks";

function operatorsDemo(props) {
    return (
      <div className="operatorsDemo">
        <div className="codeBlock">
        <CopyBlock
          text={props.file}
          language="php"
          theme="nord"
          codeBlock='true'
        />
        </div>
        <iframe width="auto" height="600px" src="http://3.140.185.148/operatorsDemo.php" title="operatorsDemo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
}

export default operatorsDemo;