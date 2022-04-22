import { Box, Button, Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect } from "react ";
import Display from "./Display";

const calculatorData = [
  { id: "clear", value: "AC", bg: "red.600", color: "whiteAlpha.900" },
  { id: "divide", value: "/", bg: "orange.500", color: "whiteAlpha.900" },
  { id: "multiply", value: "x", bg: "orange.500", color: "whiteAlpha.900" },
  { id: "subtract", value: "-", bg: "orange.500", color: "whiteAlpha.900" },
  { id: "nine", value: 9 },
  { id: "eight", value: 8 },
  { id: "seven", value: 7 },
  { id: "add", value: "+", bg: "orange.500", color: "whiteAlpha.900" },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "four", value: 4 },
  { id: "equals", value: "=", bg: "orange.500", color: "whiteAlpha.900" },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "zero", value: 0 },
  { id: "decimal", value: ".", colSpan: 2 },
  {
    id: "delete",
    value: "C",
    colSpan: 2,
    bg: "red.600",
    color: "whiteAlpha.900",
  },
];

const operators = ["AC", "/", "x", "+", "-", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Key = ({ keyData: { id, value }, handleInput, colSpan, bg, color }) => {
  return (
    <GridItem colSpan={colSpan}>
      <Button
        w={"full"}
        id={id}
        onClick={() => handleInput(value)}
        value={value}
        borderRadius="0"
        bg={bg}
        color={color}
      >
        {value}
      </Button>
    </GridItem>
  );
};

const ButtonKeys = ({ handleInput }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={"1"} className="keys">
      {calculatorData.map((key) => {
        return (
          <Key
            key={key.id}
            keyData={key}
            handleInput={handleInput}
            value={key.value}
            colSpan={key.colSpan}
            bg={key.bg}
            color={key.color}
          />
        );
      })}
    </Grid>
  );
};

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [calculatorData, setCalculatorData] = useState("");

  function handleSubmit() {
    const result = eval(calculatorData);
    setInput(`${result}`);
    setOutput(`${result}`);
    setCalculatorData(`${result}`);
  }

  function handleClear() {
    setInput("0");
    setOutput("");
    setCalculatorData("");
  }

  function handleNumber(value) {
    if (!calculatorData.length) {
      setInput(`${value}`);
      setCalculatorData(`${value}`);
    } else {
      if (value === 0 && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator =
          lastChat === "*" || operators.includes(lastChat);
        setInput(isLastChatOperator ? `${value}` : `${input}${value}`);
        setCalculatorData(`${calculatorData}${value}`);
      }
    }
  }

  function handleDot() {
    const lastChat = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      setInput("0.");
      setCalculatorData("0.");
    } else {
      if (lastChat === "*" || operators.includes(lastChat)) {
        setInput("0.");
        setCalculatorData(`${calculatorData} 0.`);
      } else {
        setInput(
          lastChat === "." || input.includes(".") ? `${input}` : `${input}.`
        );
        const formattedValue =
          lastChat === "." || input.includes(".")
            ? `${calculatorData}`
            : `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  }

  function handleOperators(value) {
    if (calculatorData.length) {
      setInput(`${value}`);
      const beforeLastInput = calculatorData.charAt(calculatorData.length - 2);
      const beforeLastInputIsOperator =
        operators.includes(beforeLastInput) || beforeLastInput === "*";
      const lastInput = calculatorData.charAt(calculatorData.length - 1);
      const lastInputIsOperator =
        operators.includes(lastInput) || lastInput === "*";
      const validOperator = value === "x" ? "*" : value;
      if (
        (lastInputIsOperator && value !== "-") ||
        (beforeLastInputIsOperator && lastInputIsOperator)
      ) {
        if (beforeLastInputIsOperator) {
          const updateValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`;
          setCalculatorData(updateValue);
        } else {
          setCalculatorData(
            `${calculatorData.substring(
              0,
              calculatorData.length - 1
            )}${validOperator}`
          );
        }
      } else {
        setCalculatorData(`${calculatorData}${validOperator}`);
      }
    }
  }

  function handleInput(value) {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((operator) => operator === value);

    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumber(value);
        break;
      case ".":
        handleDot();
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  }

  function handleOutput() {
    setOutput(calculatorData);
  }

  useEffect(() => {
    handleOutput();
  }, [calculatorData]);

  return (
    <Center className="container" w={"full"} h={"100vh"}>
      <Box className="calculator" bg={"Background"} p={"4"} borderRadius={"xl"}>
        <Display input={input} output={output} />
        <ButtonKeys handleInput={handleInput} />
      </Box>
    </Center>
  );
}

export default App;
