import { Component } from "react"
import './App.css';

export default class CalculatorComponent extends Component {
  render() {
    return (
      <div className="container" id='app'>
        <p>
          This component works exactly like the calculator you know. Click any number to start calculating!
        </p>
        <br></br>
        <br></br>
        <div className="calculator">This component works exactly like the calculator you know. Click any number to start calculating!</div>
        <CalculatorDisplay />
      </div>
    )
  }
};

class CalculatorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kNum: [],
      addition: [],
      answer: 0,
      operator: " ",
      displayVal: []
    };
  };

  wonClick(value) {
    if (typeof value === 'number') {
      this.setState(state => ({
        kNum: state.kNum.concat([value]),
        displayVal: state.displayVal.concat([value])
      }))
      // alert(this.state.kNum)
    } else {
      this.setState(state => ({
        operator: value,
        displayVal: state.displayVal.concat([value]),
        addition: state.kNum,
        kNum: []
      }));
    }
  };

  clrBtn() {
    this.setState({
      kNum: [],
      displayVal: [],
      addition: 0,
      answer: 0,
    })
  };

  numEquals() {
    let answer;
    const num1 = Number(this.state.addition.join(""))
    const num2 = Number(this.state.kNum.join(""))
    switch (this.state.operator) {
      case '+':
        answer = num1 + num2
        break;
      case '-':
        answer = num1 - num2
        break;
      case '/':
        answer = num1 / num2
        break;
      case 'x':
        answer = num1 * num2
        break;
      default:
      // do nothing
    }

    this.setState(state => ({
      displayVal: answer,
      kNum: [],
    }));
  };

  render() {
    return (
      <div>
        <div className="calculator__display">{this.state.displayVal}</div>
        <CalculatorKeys
          sonClick={this.wonClick.bind(this)}
          numEquals={this.numEquals.bind(this)}
          clrBtn={this.clrBtn.bind(this)}
        />
      </div>
    )
  };
};

const withOnClick = (onClick, Component) => (props) => (
  <Component onClick={onClick} {...props} />
)

const _OperatorKey = ({ operator, onClick }) => (
  <button onClick={() => onClick(operator)} className="key--operator">{operator}</button>
)

const _NumberKey = ({ numberWord, number, onClick }) => (
  <button onClick={() => onClick(number)} className={numberWord}>{number}</button>
)

class CalculatorKeys extends Component {
  render() {
    const { sonClick, clrBtn, numEquals } = this.props;
    const OperatorKey = withOnClick(sonClick, _OperatorKey)
    const NumberKey = withOnClick(sonClick, _NumberKey)

    return (
      <div className="calculator__keys">
        {['+', '-', 'x', '/'].map(operator => <OperatorKey operator={operator} key={operator} />)}
        <button onClick={() => numEquals()} className="key--equal">=</button>

        {[[7, 'seven'], [8, 'eight'], [9, 'nine'],
        [4, 'four'], [5, 'five'], [6, 'six'],
        [1, 'one'], [2, 'two'], [3, 'three'],
        [0, 'zero']
        ].map(([number, numberWord]) => <NumberKey numberWord={numberWord} number={number} key={number} />)}

        <button onClick={() => sonClick('.')}>.</button>

        <button onClick={() => clrBtn()}>AC</button>
      </div>

    )
  };
};