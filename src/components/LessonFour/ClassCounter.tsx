import {Component} from "react";
import CounterButton from "./CounterButton.tsx";

type State = {
    count:number;
}

class ClassCounter extends Component<object, State> {
 constructor(props: object) {
    super(props);
    this.state = {count: 0};
 }

 increaseCount = () => {
     this.setState({count: this.state.count + 1});
 }
 decreaseCount = () => {
     this.setState({count: this.state.count - 1});
 }
 resetCount = () => {
     this.setState({count: 0});
 }

 render(){
     return (
         <>
             <h1 className="text-center"
             >Count is {this.state.count}</h1>
             <div className="text-center space-x-4 pt-12 rounded-2xl">
                 <CounterButton
                     onClick={this.increaseCount}
                     label="Increase"
                 />
                 {/*<CounterButton*/}
                 {/*    onClick={this.decreaseCount}*/}
                 {/*    label="Decrease"*/}
                 {/*    disabled={onclick()counter === 0}*/}
                 {/*/>*/}

                 {/*<CounterButton*/}
                 {/*    addClasses="bg-cf-dark-red"*/}
                 {/*    onClick={resetCount}*/}
                 {/*    label="Reset"*/}
                 {/*    disabled={counter ===0}*/}
                 {/*/>*/}


             </div>
         </>
     )
 }



}

export default ClassCounter;