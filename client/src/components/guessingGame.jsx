import React, { useState, useEffect } from 'react'
import { CopyBlock, nord} from "react-code-blocks";

function guessingGame(props) {
    return (
      <div className="guessingGameDemo">
        <div className="codeBlock">
        <CopyBlock
          text={props.file}
          language="php"
          theme="nord"
          codeBlock='true'
        />
        </div>
        <iframe width="auto" height="200px" src="http://3.140.185.148/guessingGame.php" title="guessingGameDemo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );

}

export default guessingGame;