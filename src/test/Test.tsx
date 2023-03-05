import React from 'react';
import SuperInputText from "../c1-SuperInputText/SuperInputText";
import SuperButton from "../c2-SuperButton/SuperButton";
import SuperCheckbox from "../c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../c5-SuperSelect/SuperSelect";
import SuperRadio from "../c6-SuperRadio/SuperRadio";
import SuperRange from "../c7-SuperRange/SuperRange";
import style from "./Test.module.css"

export const Test = () => {
    return (
        <div className={style.test}>
            <h1>Тестовая компонента</h1>
            <div>
                <SuperInputText/>
                <br/>
                <SuperButton>Button</SuperButton>
                <br/>
                <SuperCheckbox/>
                <br/>
                <SuperEditableSpan/>
                <br/>
                <SuperSelect/>
                <br/>
                <SuperRadio/>
                <br/>
                <SuperRange/>
            </div>
        </div>
    );
};

