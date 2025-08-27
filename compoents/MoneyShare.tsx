"use client"

import { useState } from "react"

export default function MoneyShare() {
    const [money, setMoney] = useState('')
    const [person, setPerson] = useState('')
    const [moneyShare, setMoneyShare] = useState('0.00')

    const handleInputPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson(e.target.value)
    }

    const handleResetUiValue = () => {
        setMoney('')
        setPerson('')
        setMoneyShare('0.00')
    }

    const handleCalculateMoney = () => {
        if (money === '' || money <= '0') {
            alert('ตรวจสอบจำนวนเงินต้องมากกว่า 0 ')
            return
        }
        if (person === '' || person <= '0') {
            alert('ตรวจสอบจำนวนคนต้องมากกว่า 0 ')
            return
        }
        let result = parseInt(money) / parseInt(person)
        setMoneyShare(result.toFixed(2))
    }


    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
                จำนวนเงิน
            </h3>
            <input type="number" id="amount" min={0} placeholder="ป้อนจำนวนเงิน"
                className="w-full border border-gray-300 p-4 focus:outline-none focus:ring-2
                             focus:ring-blue-500 rounded"
                value={money} onChange={(e) => setMoney(e.target.value)} />
            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">
                จำนวนคน
            </h3>
            <input type="number" id="amount" min={0} placeholder="ป้อนจำนวนคน"
                className="w-full border border-gray-300 p-4 focus:outline-none focus:ring-2
                             focus:ring-blue-500 rounded"
                value={person} onChange={handleInputPerson} />
            <button className="w-full mt-8 bg-blue-800 text-2xl text-white p-4 rounded"
                onClick={handleCalculateMoney}>
                คำนวณ
            </button>
            <button className="w-full mt-4 bg-red-800 text-2xl text-white p-4 rounded"
                onClick={handleResetUiValue}>
                ล้างข้อมูล
            </button>
            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                    หารกันคนละ
                    <span className="text-red-800 text-5xl">
                        {moneyShare}
                    </span>
                    บาท
                </h3>
            </div>
        </div>
    )
}
