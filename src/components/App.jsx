import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from '../notes';
import CreateArea from './createNote';
import { useState } from 'react';

function App(){
    const [notes, setNotes] = useState([]);
    function addNote(note){
        setNotes(preNotes => {
            return[...preNotes, note];
        })
    }
    function deleteNote(id){
        setNotes(preNotes => {
            return preNotes.filter((noteItem, index) =>{
                return index !== id;
            });
        });

    }
    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) =>{
                return <Note key={index} id={index} title={noteItem.title} onDelete={deleteNote} content={noteItem.content} />
            }
            )}
            {/* {notes.map(Note)} */}
            <Footer />
        </div>
    );
}

export default App;