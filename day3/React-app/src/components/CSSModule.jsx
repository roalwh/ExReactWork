import myStyle from "./CSSModule.module.css"
function CSSModule() {
    return (
        <div>
            <h1 className={myStyle.textRed}>CSSModule</h1>
        </div>
    )
}
export default CSSModule;