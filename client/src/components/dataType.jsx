import React, { useState, useEffect } from 'react'
import { CopyBlock, nord} from "react-code-blocks";

function dataType(props) {

    return (
      <div className="dataTypeDemo">
        <div className="codeBlock">
        <CopyBlock
          text={props.file}
          language="php"
          theme="nord"
          codeBlock='true'
        />
        </div>
        <iframe width="auto" height="350px" src="http://3.140.185.148/dataTypeDemo.php" title="dataType" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );

}

export default dataType;