import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input type="text"  className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' placeholder='Tell your story ...'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
