import './Die.css'

export default function Die({value, isHeld, handleHold,id}) {

    const styles = {
        backgroundColor:  isHeld ? '#59e391' : 'white'
    }

    return (
            <button 
                style={styles}className='die' 
                onClick={() => handleHold(id)}
            >{value}</button>
    )
}