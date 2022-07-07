import React from 'react'
import "../About.css";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor:(props.mode==="light")?"white":"black",
    //     color:(props.mode==="light")?"black":"white"
    // })
    let myStyle={
        backgroundColor:(props.mode==="light")?"white":"black",
        color:(props.mode==="light")?"black":"white"
    }
    return (
        <>
            <div className="container my-3" style={{color:(props.mode==="light")?"black":"white"}}>
                <h1>About us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Textutils gives you a way to analyze your text quickly and efficiently . Be it word count, character count.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Textutils is a free character counter tool that provides instant charcter count and word count statistics for a given 
                                text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word /
                                character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It
                                suits to count characters in facebook, blog, execl document, pdf document, essays etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
