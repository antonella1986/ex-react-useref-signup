import { useState, useRef } from 'react'

export default function App() {
    //uso useRef per accedere a input non controllati
    const nameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [specialization, setSpecialization] = useState('')
    const [experience, setExperience] = useState('')
    const descriptionRef = useRef()

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'\\`~]).{8,}$/;

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const description = descriptionRef.current.value;
        if (!name || !username || !password || !experience || !description) {
            alert('Compila tutti i campi')
            return
        } else if (!specialization) {
            alert('Devi selezionare una specializzazione')
            return
        } else if (Number(experience) <= 0) {
            alert('Il numero deve essere maggiore di 0')
            return
        } else if (username.length < 6 || !/^[a-zA-Z0-9]+$/.test(username)) {
            alert('L\'username deve avere almeno 6 caratteri')
            return
        } else if (!passwordRegex.test(password)) {
            alert('La password deve avere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo');
            return;
        } else if (description.trim().length < 100 || description.trim().length > 1000) {
            alert('La descrizione deve contenere tra 100 e 1000 caratteri e non deve avere spazi iniziali e finali')
            return
        }
        console.log({ name, username, password, specialization, experience, description })
    }



    return (
        //uso la proprietà React ref per ottenenre il valore al momento del submit
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={nameRef}
            />
            <input
                type="text"
                ref={usernameRef}
            />
            <input
                type="password"
                name=""
                id=""
                ref={passwordRef}
            />
            <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                <option value="">Seleziona specializzazione</option>
                <option value="Full-stack">Full-stack</option>
                <option value="Front-end">Front-end</option>
                <option value="Back-end">Back-end</option>
            </select>
            <input
                type="number"
                name=""
                id=""
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
            />
            <textarea ref={descriptionRef} name="" id=""></textarea>

            <button type='submit'>Invia</button>
        </form>
    )
}
