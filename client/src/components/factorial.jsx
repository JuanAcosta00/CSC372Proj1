import React, { useState, useEffect } from 'react'
import { CopyBlock, nord} from "react-code-blocks";

function factorial(props) {

  // const [currQuestions, setCurrQuestions] = useState([]);

  const handleChange = event => {
    // setSearchTerm(event.target.value);
  };

    return (
      <div className="factorialDemo">
        <div className="codeBlock">
        <CopyBlock
          text={props.file}
          language="php"
          theme="nord"
          codeBlock='true'
        />
        </div>
        <iframe width="auto" height="300px" src="http://3.140.185.148/factorial.php" title="factorialDemo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );

}

export default factorial;