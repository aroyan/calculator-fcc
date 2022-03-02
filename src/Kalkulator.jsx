import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

const endWithOperators = /[-=/+*]$/;
const endsWithNegativeSign = /\d[x/+-]{1}-$/;

export default function Kalkulator() {
  const [currentVal, setCurrentVal] = useState("0");
  const [prevVal, setPrevVal] = useState("0");
  const [formula, setFormula] = useState("");
  const [evaluated, setEvaluated] = useState("");

  function handleOperators(e) {
    if (prevVal[prevVal.length - 1].match(endWithOperators)) {
      setPrevVal(prevVal.replace(endWithOperators, e.target.value));
    } else {
      setFormula(e.target.value);
      setPrevVal(prevVal + e.target.value);
      setCurrentVal(currentVal + e.target.value);
    }
  }

  function handleEvaluate(e) {
    setPrevVal(eval(prevVal));
    setCurrentVal(prevVal + e.target.value);
    // setPrevVal("");
  }

  function handleDecimal(e) {
    if (prevVal.includes(".")) {
      setPrevVal(prevVal);
    } else {
      setPrevVal(prevVal + e.target.value);
    }
  }

  function handleNumbers(e) {
    if (prevVal.length <= 1 && e.target.value === "0") {
      setPrevVal(prevVal);
    } else if (prevVal[0] === "0") {
      setPrevVal(prevVal.substring(1) + e.target.value);
      setCurrentVal(prevVal.substring(1) + e.target.value);
    } else {
      setPrevVal(prevVal + e.target.value);
      setCurrentVal(currentVal + e.target.value);
    }
  }

  // AC Button
  function initialize() {
    setCurrentVal("0");
    setPrevVal("0");
    setFormula("");
    setEvaluated(false);
  }

  return (
    <Box color={"black"} id={"display"}>
      <Heading as={"h1"} color={"whatsapp.500"} mb={"5"}>
        Setup
      </Heading>
      <Heading as={"h2"} color={"white"} mb={"4"}>
        Current Value <br />
        {currentVal}
      </Heading>
      <Heading as={"h2"} color={"yellow"} mb={"4"} id="display">
        {prevVal}
      </Heading>
      <Button onClick={handleNumbers} value={"1"} id={"one"}>
        1
      </Button>
      <Button onClick={handleNumbers} value={"2"} id={"two"}>
        2
      </Button>
      <Button onClick={handleNumbers} value={"3"} id={"three"}>
        3
      </Button>
      <Button onClick={handleNumbers} value={"4"} id={"four"}>
        4
      </Button>
      <Button onClick={handleNumbers} value={"5"} id={"five"}>
        5
      </Button>
      <Button onClick={handleNumbers} value={"6"} id={"six"}>
        6
      </Button>
      <Button onClick={handleNumbers} value={"7"} id={"seven"}>
        7
      </Button>
      <Button onClick={handleNumbers} value={"8"} id={"eight"}>
        8
      </Button>
      <Button onClick={handleNumbers} value={"9"} id={"nine"}>
        9
      </Button>
      <Button onClick={handleNumbers} value={"0"} id={"zero"}>
        0
      </Button>
      <Button onClick={handleDecimal} value={"."} id={"decimal"}>
        .
      </Button>
      <br />
      <Box mt={"4"} color={"purple"}>
        <Button onClick={handleOperators} value={"+"} id={"add"}>
          +
        </Button>
        <Button onClick={handleOperators} value={"-"} id={"subtract"}>
          -
        </Button>
        <Button onClick={handleOperators} value={"*"} id={"multiply"}>
          x
        </Button>
        <Button onClick={handleOperators} value={"/"} id={"divide"}>
          /
        </Button>
        <Button onClick={handleEvaluate} value={"="} id={"equals"}>
          =
        </Button>
        <Button onClick={initialize} value={"AC"} id={"clear"}>
          AC
        </Button>
      </Box>
    </Box>
  );
}
