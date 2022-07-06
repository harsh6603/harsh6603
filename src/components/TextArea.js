import React,{useState} from 'react'

export default function TextArea(props) {

    const countWords = (t) => {
        let result=t.split(" ");
        let final=result.filter((data) => {
            return data.length!==0
        });
        let count=0;
        for(let i=0;i<t.length;i++)
        {
            if(t[i]==='\n' && t[i+1]!==" ")
                count++;
        }
        setWord(final.length+count);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
        countWords(e.target.value);
    }
    
    const convertLower = () => {
        if(text.length!==0)
        {
            setText(text.toLowerCase());
            props.enterAlert("converted in to lowercase","success");
        }
        else
            props.enterAlert("please enter text.","warning");
    }

    const handleOnClick = () => {
        if(text.length!==0)
        {
            setText(text.toUpperCase());
            props.enterAlert("converted in to uppercase","success");
        }
        else
            props.enterAlert("please enter text","warning")
    }
    
    const clearText = () => {
        if(text.length!==0)
        {
            setText("");
            setWord(0);
            props.enterAlert("text is cleared.","success");
        }
        else
            props.enterAlert("please enter text.","warning");
    }

    const copyText = () => {
        if(text.length!==0)
        {
            navigator.clipboard.writeText(text);
            props.enterAlert("text copied","success");
        }
        else
            props.enterAlert("please enter text","warning");
    }
    
    const removeSpaceText = () => {
        if(text.length!==0)
        {
            let newText=text.split(/[ ]+/);
            console.log(newText);
            setText(newText.join(" "));
            props.enterAlert("extra space removed.","success");
        }
        else
            props.enterAlert("please enter text.","warning");
    }

    const capitalizeText = () => {
        if(text.length!==0)
        {
            let newText=text;
            for(let i=0;i<newText.length;i++)
            {
                newText=newText.charAt(0).toUpperCase()+newText.slice(1);
                if(newText[i]===" ")
                {
                    newText=newText.slice(0,i+1) + newText.charAt(i+1).toUpperCase() + newText.slice(i+2);
                }
            }
            setText(newText)
            props.enterAlert("text capitalized","success");
        }
        else
            props.enterAlert("please enter text.","warning");
    }

    const [text,setText] = useState("");
    const [word,setWord] = useState(0);
    return (
        <>
        <div className='container' style={{color:(props.mode==="light")?"black":"white"}}>
            <h1>Text Analysis</h1>
            <div className="form-floating">
                <textarea onChange={handleOnChange} style={{backgroundColor:(props.mode==="light")?"white":"black",color:(props.mode==="light")?"black":"white",zIndex:"0"}} value={text} placeholder="Enter your text" rows="8" cols="180" ></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleOnClick}>Convert In Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={convertLower}>Convert In lowercase</button>
            <button className="btn btn-primary my-3 mx-0" onClick={clearText}>Clear text</button>
            <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy text</button>
            <button className="btn btn-primary my-3 mx-0" onClick={removeSpaceText}>Remove extra spaces</button>
            <button className="btn btn-primary my-3 mx-2" onClick={capitalizeText}>Capitalize Text</button>
        </div>
        <div className="container" style={{color:(props.mode==="light")?"black":"white"}}>
            <p>{word} words and {text.length} characters</p>
        </div>
        <div className="container" style={{color:(props.mode==="light")?"black":"white"}}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
