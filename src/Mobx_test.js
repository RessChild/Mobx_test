import React, { useEffect } from "react";
// import useStore from "./useStore";
import { useObserver } from "mobx-react";
import { counter } from "./observable/counter";

const Mobx_test = () => {
    // const { counter } = useStore();
    const increase = () => {
        counter.increase();
    }
    const decrease = () => {
        counter.decrease();
    }

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    return useObserver(() => <div>
        <div>테스트 중</div>
        <div>{ counter.number }</div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>);
}

export default Mobx_test;