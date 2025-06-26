import { useState } from 'react'

export default function App() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [experience, setExperience] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !username || !password || !experience || !description) {
            alert('Completa tutti i campi')
            return
        } else if (!specialization) {
            alert('Devi selezionare una specializzazione')
            return
        } else if (Number(experience < 0)) {
            alert('Il numero deve essere maggiore di 0')
            return
        }
        console.log({ name, username, password, specialization, experience, description })
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                name=""
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="" id=""></textarea>

            <button type='submit'>Invia</button>
        </form>
    )
}
