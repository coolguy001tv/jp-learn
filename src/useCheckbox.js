import {useEffect, useState} from "react";

export default function (){
    // 初始化状态，读取 localStorage 中的数据
    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem('checkboxSelection');
        const initialValue = JSON.parse(saved);
        return initialValue || { han: true, kana: true, meaning: false, roman:false };
    });

    // 监听状态变更，并更新 localStorage
    useEffect(() => {
        localStorage.setItem('checkboxSelection', JSON.stringify(checkedItems));
    }, [checkedItems]);

    // 处理复选框变更事件
    const handleChange = (e) => {
        setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
    };
    return {
        checkedItems, handleChange
    }
}