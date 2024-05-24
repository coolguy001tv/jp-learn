import React, { useState, useEffect } from 'react';
import useCheckbox from "./useCheckbox";

const selection = {
    "han":"汉字写法",
    "kana":"假名写法",
    "meaning":"含义",
    "roman":"罗马音"
}
const CheckboxComponent = (props) => {
    const {checkedItems, handleChange} = props;

    return (
        <div className={'setting'}>
            {['han', 'kana', 'meaning','roman'].map((item) => (
                <label key={item}>
                    <input
                        type="checkbox"
                        name={item}
                        checked={checkedItems[item]}
                        onChange={handleChange}
                    />
                    {selection[item]}
                </label>
            ))}
        </div>
    );
};

export default CheckboxComponent;