
import '../style/ReactUpperLower.css'
import { useState } from 'react'
import { Alert, Switch } from 'antd';
// import { Link } from 'react-router-dom';

const ReactUpperLower = () => {
    const [toggleTime, setToggleTime] = useState(false)
    const [textUpper, setTextUpper] = useState("")
    const [myToggleColor, setMyToggleColor] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [textBtnClick, setTextBtnClick] = useState('Enable Dark Mode');

    const handleUpClick = () => {
        const newText = textUpper.toUpperCase();
        setTextUpper(newText)
    }   

    const handleLoClick = () => {
        const setTextLower = textUpper.toLowerCase();
        setTextUpper(setTextLower)
    }

    const handleOnChange = (e: any) => {
        setTextUpper(e.target.value)
    }

    const handleClearClick = () => {
        const newTextClear = ''
        setTextUpper(newTextClear)
    }

    const toggleChanges = () => {
        setToggleTime(true)
        if (myToggleColor.color == 'black') {
            setMyToggleColor({
                color: 'white',
                backgroundColor: 'black'
            })
            setTextBtnClick('Enable Light Mode')
            document.title = 'TextUtils - Dark Mode';
            // setInterval(() => {
            //     document.title = 'TextUtils is Amazing';
            // }, 2000)
            // setInterval(() => {
            //     document.title = 'Install TextUtils';
            // }, 1500)
        }
        else {
            setMyToggleColor({
                color: 'black',
                backgroundColor: 'white'
            })
            setTextBtnClick('Enable Dark Mode')
            document.title = 'TextUtils - Light Mode';
        }
        setTimeout(() => {
            setToggleTime(false)
        }, 1500)
    }

    const handleCopyClick = () => {
        const text: any = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaceClick = () => {
        const spaceRemove = textUpper.split(/[ ]+/);
        setTextUpper(spaceRemove.join(' '))
        setTextBtnClick('Extra Space Removed')
    }

    const onChange = (checked: boolean) => {
        return (`switch to ${checked}`);
    };

    const btnClick = (color: any) => {
        setMyToggleColor({
            color: 'white',
            backgroundColor: color
        })
    }


    return (
        <>
            <div
                className='w-full h-full flex flex-col'
                style={{ background: `${myToggleColor.backgroundColor}`, color: `${myToggleColor.color}` }}>
                <div className='h-[80px] bg-red-400'>
                    <div className='flex gap-3 text-2xl font-semibold'>
                        <a>TextUtils</a>
                        {/* <Link to="/about" className='hover:text-gray-400'>About</Link> */}
                        {/* <Link to="/contact" className='hover:text-gray-400'>Contact</Link> */}
                    </div>
                    <div className='flex justify-end items-center gap-3'>
                        <button
                            className='border-2 h-10 w-14 rounded-lg text-white bg-red-500 font-semibold'
                            onClick={() => btnClick("red")} > Red </button>
                        <button
                            className='border-2 h-10 w-16 rounded-lg text-white bg-green-500 font-semibold'
                            onClick={() => btnClick("green")} > Green </button>
                        <button
                            className='border-2 h-10 w-14 rounded-lg text-white bg-gray-500 font-semibold'
                            onClick={() => btnClick("gray")} > Gray </button>
                        <button
                            className='border-2 h-10 w-16 rounded-lg text-white bg-purple-500 font-semibold'
                            onClick={() => btnClick("purple")} > Purple</button>
                        <Switch
                            defaultChecked
                            onChange={onChange}
                            onClick={toggleChanges}
                            checkedChildren={"Light"}
                            unCheckedChildren={"Dark"}
                        />
                    </div>
                </div>

                <div className='h-10'>
                    {
                        toggleTime ?
                            <div role='alert'>
                                {<Alert message={textBtnClick !== "Enable Dark Mode" ? "Success : Dark Mode" : "Success : Light Mode"}
                                    type="success" />}
                            </div>
                            : null
                    }
                </div>

                <div className='w-full h-full'>
                    <div className='mb-3 flex flex-col justify-center items-center' >
                        <label htmlFor="" className='font-bold text-3xl my-3 text-start'> 
                        Enter TextUtils - Word Counter, Character Counter Ext. </label>
                        <textarea
                            value={textUpper}
                            id='myBox'
                            name="text"
                            onChange={handleOnChange}
                            style={{ backgroundColor: "lightgray" }}
                            className='border w-[80%] h-52 rounded outline-none text-gray-600'>
                        </textarea>
                    </div>
                    <div className='mx-2 flex gap-4 justify-center'>
                        <button disabled={textUpper.length === 0} className='disabled:bg-blue-300 bg-blue-500 h-10 w-32 rounded-xl text-white' onClick={handleUpClick}> UpperCase </button>
                        <button disabled={textUpper.length === 0} className='disabled:bg-blue-300 bg-blue-500 h-10 w-32 rounded-xl text-white' onClick={handleLoClick}> LowerCase </button>
                        <button disabled={textUpper.length === 0} className='disabled:bg-blue-300 bg-blue-500 h-10 w-32 rounded-xl text-white' onClick={handleClearClick}> Clear Text </button>
                        <button disabled={textUpper.length === 0} className='disabled:bg-blue-300 bg-blue-500 h-10 w-32 rounded-xl text-white' onClick={handleCopyClick} > Copy Text </button>
                        <button disabled={textUpper.length === 0} className='disabled:bg-blue-300 bg-blue-500 h-10 w-32 rounded-xl text-white' onClick={handleExtraSpaceClick}> Space Remove </button>
                    </div>
                    <div className='my-5 flex flex-col justify-center items-start pl-32 w-[90%]'>
                        <h1 className='text-2xl font-semibold'>Text Summary</h1>
                        <p className='my-2'>{textUpper ? textUpper.trim().split(/\s+/).length : "0"} Words and {textUpper.length} characters </p>
                        <p className='my-2'>{textUpper ? 0.008 * textUpper.trim().split(" ").length : "0"} Minutes read </p>
                        <h3 className='text-2xl font-semibold'>Preview</h3>
                        <p className=''>{textUpper.length > 0 ? textUpper : 'Nothing to Preview...!'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactUpperLower
