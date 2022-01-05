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
      addition2: [],
      lastNum: [],
      answer: 0,
      operator: " ",
      displayVal: []
    };
  };

  wonClick(values) {
    if (typeof values === 'number') {
      this.setState(state => ({
        kNum: state.kNum.concat([values]),
        lastNum: state.lastNum.concat([values]),
        displayVal: state.displayVal.concat([values])
      }))
      // alert(this.state.kNum)
    } else {
      this.setState(state => ({
        operator: values,
        displayVal: state.displayVal.concat([values]),
        addition: state.kNum
      }));
      //alert(this.state.kNum + "this is kNum")
      this.setState({
        kNum: []
      })
    }
  };

  /*joinNum(values){
  this.setState({
  addition:Number(this.state.kNum.join([values])),
  kNum:[],
  })
  };*/


  clrBtn(values) {
    this.setState({
      kNum: [values],
      displayVal: [],
      lastNum: [],
      addition: 0,
      addition2: 0,
      answer: 0,
      isEqual: false
    })
  };

  numEquals() {

    if (this.state.operator === "+") {
      if (true) {
        this.setState(state => ({
          addition2: state.kNum,
          answer: Number(state.addition.join("")) + Number(state.addition2.join(""))
        }))
      } else {
        this.setState(state => ({
          answer: Number(state.addition.join("")) + Number(state.addition2.join(""))
        }))
      }
      this.setState(state => ({
        lastNum: state.answer
      }))
    }


    if (this.state.operator === "-") {
      if (true) {
        this.setState(state => ({
          addition2: state.kNum,
          answer: Number(state.addition.join("")) - Number(state.addition2.join(""))
        }))
      } else {
        this.setState(state => ({
          answer: Number(state.addition.join("")) - Number(state.addition2.join(""))
        }))
      }
      this.setState(state => ({
        lastNum: state.answer
      }))
    }


    if (this.state.operator === "/") {
      if (true) {
        this.setState(state => ({
          addition2: state.kNum,
          answer: Number(state.addition.join("")) / Number(state.addition2.join(""))
        }))
      } else {
        this.setState(state => ({
          answer: Number(state.addition.join("")) / Number(state.addition2.join(""))
        }))
      }
      this.setState(state => ({
        lastNum: state.answer
      }))
    }


    if (this.state.operator === "x") {
      if (true) {
        this.setState(state => ({
          addition2: state.kNum,
          answer: Number(state.addition.join("")) * Number(state.addition2.join(""))
        }))
      } else {
        this.setState(state => ({
          answer: Number(state.addition.join("")) * Number(state.addition2.join(""))
        }))
      }
      this.setState(state => ({
        lastNum: state.answer
      }))
    }

    this.setState(state => ({
      addition2: Number(state.kNum.join("")),
      displayVal: state.answer,
      kNum: [],
    }));
  };
  isEqual = true


  render() {
    return (
      <div>
        <div className="calculator__display">{this.state.displayVal}</div>
        <CalculatorKeys sonClick={this.wonClick.bind(this)} numEquals={this.numEquals.bind(this)} clrBtn={this.clrBtn.bind(this)} />
      </div>
    )
  };
};


class CalculatorKeys extends Component {
  render() {

    return (
      <div className="calculator__keys">

        <button onClick={() => this.props.sonClick('+')} className="key--operator" id="adds" data-action="add">+</button>

        <button onClick={() => this.props.sonClick('-')} className="key--operator" id="subtracts" data-action="subtract">-</button>

        <button onClick={() => this.props.sonClick('x')} className="key--operator" id="multiplies" data-action="multiply">&times;</button>

        <button onClick={() => this.props.sonClick('/')} className="key--operator" id="divides" data-action="divide">/</button>

        <button onClick={() => this.props.numEquals()} className="key--equal" id="equals" data-action="calculate">=</button>

        <button onClick={() => this.props.sonClick(7)} className="seven"> 7</button>

        <button onClick={() => this.props.sonClick(8)} className="eight">8</button>

        <button onClick={() => this.props.sonClick(9)} className="nine">9</button>

        <button onClick={() => this.props.sonClick(4)} className="four">4</button>

        <button onClick={() => this.props.sonClick(5)} className="five">5</button>

        <button onClick={() => this.props.sonClick(6)} className="six">6</button>

        <button onClick={() => this.props.sonClick(1)} className="one">1</button>

        <button onClick={() => this.props.sonClick(2)} className="two">2</button>

        <button onClick={() => this.props.sonClick(3)} className="three">3</button>

        <button onClick={() => this.props.sonClick(0)} className="zero">0</button>

        <button onClick={() => this.props.sonClick('.')} id="decimals" data-action="decimal">.</button>

        <button onClick={() => this.props.clrBtn(0)} id="clears" data-action="clear">AC</button>
      </div>

    )
  };
};