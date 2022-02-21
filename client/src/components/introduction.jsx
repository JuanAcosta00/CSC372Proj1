import React, { useState, useEffect } from 'react'

function introduction(props) {

  // const [currQuestions, setCurrQuestions] = useState([]);

  const handleChange = event => {
    // setSearchTerm(event.target.value);
  };

    return (
      <div className="IntroductionBlock">
        <div>
          In this I will explain how to use PHP and the syntax and semantics of the language.
          There will be multiple examples using PHP throughout this page.
        </div>
      </div>
    );

}

export default introduction;