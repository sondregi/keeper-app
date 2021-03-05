import React from "react";

function Note() {
    return(
        <div className="bg-white rounded-lg shadow-lg p-2.5 w-60 m-4 float-left  ">
            <h1 className="text-l font-medium tracking-wide mb-1.5">This is the note title</h1>
            <p className="text-l mb-2.5 tracking-wide">This is the note content</p>
        </div>
    );
}

export default Note;